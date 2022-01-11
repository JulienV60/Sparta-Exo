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

describe("#10_play_with_push", () => {
  test("Should be an array with integers from 0 to 9", () => {
    return studentCode.then((code) => {
      const digits = eval(code + "; digits;");

      expect(digits).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

  test("Should be defined with multiple push", () => {
    return studentCode.then((code) => {
      const found = code.match(/digits(\s*?)\.push/g);

      if (/for\s*?\((.*?);(.*?);(.*?)\)/.test(code)) {
        console.warn(
          "Smart move to use a loop, but no loops authorized in this exercise !"
        );
      }
      if (/while\s*?\((.*?)\)/.test(code)) {
        console.warn(
          "Smart move to use a loop, but no loops authorized in this exercise !"
        );
      }

      if (found !== null) {
        expect(found.length).toBe(10);
      }
    });
  });

  test("last should have a value of 9", () => {
    return studentCode.then((code) => {
      const last = eval(code + "; last;");

      expect(last).toEqual(9);
    });
  });

  test("Should be linked to the last cell of the variable digits", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(/(let|const) last/m),
        "for (var i = 0; i <= 15; i++) digits.push(i); $&"
      );
      const last = eval(changedStudentCode + "; last;");
      expect(last).toBe(15);
    });
  });
});

