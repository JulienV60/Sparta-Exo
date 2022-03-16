const path = require("path");
const readcode = require("./readcode");

let studentCode;
beforeAll(() => {
  studentCode = readcode(path.resolve(__dirname, "../src/index.js"));
  return studentCode;
});

describe("#03_includes_array", () => {
  test("theComputedOne should be bound to the number 42", () => {
    return studentCode.then((code) => {
      const theComputedOne = eval(code + "; theComputedOne;");

      expect(theComputedOne).toBe(42);
    });
  });

  test("isTheComputedOneInOurNumbers should be bound to includes used on scientistsNumbers with theComputedOne", () => {
    return studentCode.then((code) => {
      const isTheComputedOneInOurNumbers = eval(code + "; isTheComputedOneInOurNumbers;");

      expect(isTheComputedOneInOurNumbers).toBe(true);
    });
  });

  test("isTheComputedOneInOurNumbers value should change when you change theComputedOne", () => {
    return studentCode.then((code) => {
      const changedCode = code.replace(
        "const theComputedOne = 42;",
        "const theComputedOne = 420;"
      );

      const isTheComputedOneInOurNumbers = eval(changedCode + "; isTheComputedOneInOurNumbers;");

      expect(isTheComputedOneInOurNumbers).toBe(false);
    });
  });

  test("It should log the right message when theComputedOne is in scientistsNumbers", () => {
    return studentCode.then((code) => {
      const fakeLog = jest.spyOn(console, "log")
        .mockImplementation((log) => log);

      eval(code);

      expect(fakeLog).toHaveBeenCalledWith("The Answer to the Ultimate Question of Life, the Universe, and Everything is 42, I knew it!");
      fakeLog.mockRestore();
    });
  });

  test("It should log the right message when theComputedOne is in scientistsNumbers, no matter what number you search", () => {
    return studentCode.then((code) => {
      const changedCode = code.replace(
        "const theComputedOne = 42;",
        "const theComputedOne = 666;"
      );

      const fakeLog = jest.spyOn(console, "log")
        .mockImplementation((log) => log);

      eval(changedCode);

      expect(fakeLog).toHaveBeenCalledWith("The Answer to the Ultimate Question of Life, the Universe, and Everything is 666, I knew it!");
      fakeLog.mockRestore();
    });
  });

  test("It should log the other message when the number you search aren't in scientistsNumbers", () => {
    return studentCode.then((code) => {
      const changedCode = code.replace(
        "const theComputedOne = 42;",
        "const theComputedOne = 420;"
      );

      const fakeLog = jest.spyOn(console, "log")
        .mockImplementation((log) => log);

      eval(changedCode);

      expect(fakeLog).toHaveBeenCalledWith("I always thought something was fundamentally wrong with the universe.");
      fakeLog.mockRestore();
    });
  });
});
