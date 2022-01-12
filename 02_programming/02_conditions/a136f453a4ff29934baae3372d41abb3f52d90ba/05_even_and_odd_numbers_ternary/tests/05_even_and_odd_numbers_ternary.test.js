const path = require("path");
const readcode = require("./readcode");

let studentCode;
beforeAll(() => {
  studentCode = readcode(path.resolve(__dirname, "../src/index.js"));
  return studentCode;
});

describe("#04_even_and_odd_numbers_ternary", () => {
  test("It shouldn't use if/else statements", () => {
    return studentCode.then((code) => {
      const hasIf = code.match(
        "if"
      );

      expect(hasIf).toBeFalsy();
    });
  });

  test("It should log the right message when the number is even", () => {
    return studentCode.then((code) => {
      const fakeLog = jest.spyOn(console, "log")
        .mockImplementation((log) => log);

      eval(code);

      expect(fakeLog).toHaveBeenCalledWith("The number is even");
      fakeLog.mockRestore();
    });
  });

  test("It should log the right message when the number is odd", () => {
    return studentCode.then((code) => {
      const changedCode = code.replace(
        "let numberToCheck = 18;",
        "let numberToCheck = 17;"
      );

      const fakeLog = jest.spyOn(console, "log")
        .mockImplementation((log) => log);

      eval(changedCode);

      expect(fakeLog).toHaveBeenCalledWith("The number is odd");
      fakeLog.mockRestore();
    });
  });
});
