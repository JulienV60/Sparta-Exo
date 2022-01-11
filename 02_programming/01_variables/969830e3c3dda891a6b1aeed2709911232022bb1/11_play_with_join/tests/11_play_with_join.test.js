/* global beforeAll describe test expect */
const fs = require("fs");
const path = require("path");
const readcode = require("./readcode");

let studentCode;

beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(
    path.resolve(__dirname, "../src/index.js")
  );
  return studentCode;
});


describe("#11_play_with_join", () => {
  test("litteralDigits should be equal to an array with numbers spelled out as strings from zero to nine", () => {
    return studentCode.then((code) => {
      const litteralDigits = eval(code + "; litteralDigits;");

      expect(litteralDigits).toEqual([
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
      ]);
    });
  });

  test("Should be equal to a string 'zero - one - two ...'", () => {
    return studentCode.then((code) => {
      const allDigits = eval(code + "; allDigits;");

      expect(allDigits).toEqual(
        "zero - one - two - three - four - five - six - seven - eight - nine"
      );
    });
  });

  test("Should be linked to litteralDigits. Changing it should change allDigits", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(/(let|const) allDigits/m),
        "litteralDigits[5] = 'cinq'; $&"
      );
      const allDigits = eval(changedStudentCode + "; allDigits;");
      expect(allDigits).toBe(
        "zero - one - two - three - four - cinq - six - seven - eight - nine"
      );
    });
  });
});
