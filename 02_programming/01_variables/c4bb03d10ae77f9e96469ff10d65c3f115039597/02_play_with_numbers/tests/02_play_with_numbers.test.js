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

describe("#play with numbers", () => {
  test("foo should have an integer 12 as a value", () => {
    return studentCode.then((code) => {
      const foo = eval(code + "; foo;");

      expect(foo).toBe(12);
    });
  });

  test("bar should have an integer 28 as a value", () => {
    return studentCode.then((code) => {
      const bar = eval(code + "; bar;");

      expect(bar).toBe(28);
    });
  });

  describe("sumResult", () => {
    test("Should be the sum of foo and bar as a value", () => {
      return studentCode.then((code) => {
        const sumResult = eval(code + "; sumResult;");

        expect(sumResult).toBe(40);
      });
    });

    test("Should be linked to foo and bar. Changing foo should update it", () => {
      return studentCode.then((code) => {
        const changedStudentCode = code.replace(
          new RegExp(/(let|const)(\s*?)foo(\s*?)=(\s*?)([0-9]{2})(\s*?);/),
          "const foo = 10;"
        );
        const sumResult = eval(changedStudentCode + "; sumResult;");
        expect(sumResult).toBe(38);
      });
    });

    test("Should be linked to foo and bar. Changing bar should update it", () => {
      return studentCode.then((code) => {
        const changedStudentCode = code.replace(
          new RegExp(/(let|const)(\s*?)bar(\s*?)=(\s*?)([0-9]{2})(\s*?);/),
          "const bar = 10;"
        );
        const sumResult = eval(changedStudentCode + "; sumResult;");
        expect(sumResult).toBe(22);
      });
    });
  });

  describe("prodResult", () => {
    test("Should be the product of bar and foo", () => {
      return studentCode.then((code) => {
        const prodResult = eval(code + "; prodResult;");

        expect(prodResult).toBe(336);
      });
    });

    test("Should be linked to foo and bar. Changing foo should update it", () => {
      return studentCode.then((code) => {
        const changedStudentCode = code.replace(
          new RegExp(/(let|const)(\s*?)foo(\s*?)=(\s*?)([0-9]{2})(\s*?);/),
          "const foo = 10;"
        );
        const prodResult = eval(changedStudentCode + "; prodResult;");
        expect(prodResult).toBe(280);
      });
    });

    test("Should be linked to foo and bar. Changing bar should update it", () => {
      return studentCode.then((code) => {
        const changedStudentCode = code.replace(
          new RegExp(/(let|const)(\s*?)bar(\s*?)=(\s*?)([0-9]{2})(\s*?);/),
          "const bar = 10;"
        );
        const prodResult = eval(changedStudentCode + "; prodResult;");
        expect(prodResult).toBe(120);
      });
    });
  });
});
