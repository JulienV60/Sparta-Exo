const path = require("path");
const readcode = require("./readcode");

let studentCode;
beforeAll(() => {
  studentCode = readcode(path.resolve(__dirname, "../src/index.js"));
  return studentCode;
});

describe("#01_driving_licence", () => {
  test("It should log the right message when the driver meets the right conditions", () => {
    return studentCode.then((code) => {
      const fakeLog = jest.spyOn(console, "log")
        .mockImplementation((log) => log);

      eval(code);

      expect(fakeLog).toHaveBeenCalledWith("You're allowed to drive.");
      fakeLog.mockRestore();
    });
  });

  test("It should log the other message when the driver doesn't have the minimum age", () => {
    return studentCode.then((code) => {
      const changedCode = code.replace(
        "let age = 18;",
        "let age = 17;"
      );

      const fakeLog = jest.spyOn(console, "log")
        .mockImplementation((log) => log);

      eval(changedCode);

      expect(fakeLog).toHaveBeenCalledWith("You're not allowed to drive yet.");
      fakeLog.mockRestore();
    });
  });

  test("It should log the other message when the driver doesn't have a driving licence", () => {
    return studentCode.then((code) => {
      const changedCode = code.replace(
        "let hasDrivingLicence = true;",
        "let hasDrivingLicence = false;"
      );

      const fakeLog = jest.spyOn(console, "log")
        .mockImplementation((log) => log);

      eval(changedCode);

      expect(fakeLog).toHaveBeenCalledWith("You're not allowed to drive yet.");
      fakeLog.mockRestore();
    });
  });
});
