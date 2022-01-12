const path = require("path");
const readcode = require("./readcode");

let studentCode;
beforeAll(() => {
  studentCode = readcode(path.resolve(__dirname, "../src/index.js"));
  return studentCode;
});

describe("#07_object_values", () => {
  test("armouryWithNamesOnly should be an array with all values from armoury", () => {
    return studentCode.then((code) => {
      const armouryWithNamesOnly = eval(code + "; armouryWithNamesOnly;");

      expect(armouryWithNamesOnly).toStrictEqual(["Gungnir", "Mjöllnir", "Gleipnir", "Hofund", "Vidar's shoes", "Gjallarhorn"]);
    });
  });

  test("armouryWithNamesOnly value should change with armoury's values", () => {
    return studentCode.then((code) => {
      const changedCode = code.replace(
        "Hofund",
        "Angurvadal"
      );

      const changedArmouryWithNamesOnly = eval(changedCode + "; armouryWithNamesOnly;");

      expect(changedArmouryWithNamesOnly).toStrictEqual(["Gungnir", "Mjöllnir", "Gleipnir", "Angurvadal", "Vidar's shoes", "Gjallarhorn"]);
    });
  });

  test("isTheRequestInArmoury should be a boolean equal to the presence of odinRequest in armouryWithNamesOnly", () => {
    return studentCode.then((code) => {
      const isTheRequestInArmoury = eval(code + "; isTheRequestInArmoury;");

      expect(isTheRequestInArmoury).toBe(true);
    });
  });

  test("isTheRequestInArmoury value should change with armoury or odinRequest values", () => {
    return studentCode.then((code) => {
      const changedCode = code.replace(
        `const odinRequest = "Mjöllnir";`, // eslint-disable-line quotes
        `const odinRequest = "Portal";` // eslint-disable-line quotes
      );

      const changedIsTheRequestInArmoury = eval(changedCode + "; isTheRequestInArmoury;");

      expect(changedIsTheRequestInArmoury).toBe(false);
    });
  });

  test("It should log the right message when odinRequest is in armouryWithNamesOnly", () => {
    return studentCode.then((code) => {
      const fakeLog = jest.spyOn(console, "log")
        .mockImplementation((log) => log);

      eval(code);

      expect(fakeLog).toHaveBeenCalledWith("Ah, I finally found something to hammer that nail into");
      fakeLog.mockRestore();
    });
  });

  test("It should log the right message when odinRequest is in armouryWithNamesOnly, no matter what weapon you search", () => {
    return studentCode.then((code) => {
      const changedCode = code.replace(
        `const odinRequest = "Mjöllnir";`, // eslint-disable-line quotes
        `const odinRequest = "Gungnir";` // eslint-disable-line quotes
      );

      const fakeLog = jest.spyOn(console, "log")
        .mockImplementation((log) => log);

      eval(changedCode);

      expect(fakeLog).toHaveBeenCalledWith("Ah, I finally found something to hammer that nail into");
      fakeLog.mockRestore();
    });
  });

  test("It should log the other message when the weapon you search is not in the armoury", () => {
    return studentCode.then((code) => {
      const changedCode = code.replace(
        `const odinRequest = "Mjöllnir";`, // eslint-disable-line quotes
        `const odinRequest = "Leviathan";` // eslint-disable-line quotes
      );

      const fakeLog = jest.spyOn(console, "log")
        .mockImplementation((log) => log);

      eval(changedCode);

      expect(fakeLog).toHaveBeenCalledWith("What do you want me to do with this?");
      fakeLog.mockRestore();
    });
  });
});
