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

describe("#03_play_with_objects_and_arrays", () => {
  test("sparta should be an object with the correct keys and values", () => {
    return studentCode.then((code) => {
      const sparta = eval(code + "; sparta;");
      const expectedOject = {
        check: "Spartan, what is your profession?!",
        response: "Dev dev dev!",
      };
      expect(sparta).toEqual(expectedOject);
    });
  });

  test("Should be linked to answer. Changing answer should update it", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(
          /(let|const)(\s*?)answer(\s*?)=(\s*?)"Dev dev dev!"(\s*?);/
        ),
        "const answer = 'yes?';"
      );
      const sparta = eval(changedStudentCode + "; sparta;");
      const expectedOject = {
        check: "Spartan, what is your profession?!",
        response: "yes?",
      };
      expect(sparta).toEqual(expectedOject);
    });
  });

  test("leader should be an string with the correct value", () => {
    return studentCode.then((code) => {
      const leader = eval(code + "; leader;");

      expect(leader).toEqual("Spartan, what is your profession?!");
    });
  });

  test("leader should be linked to check. Changing the phrase inside sparta should update it", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp("(let|const) leader"),
        "sparta.check = 'yes?'; $&"
      );
      const promoChanged = eval(changedStudentCode + "; leader;");
      expect(promoChanged).toEqual("yes?");
    });
  });

  test("should be an array with the correct values", () => {
    return studentCode.then((code) => {
      const digits = eval(code + "; digits;");

      expect(digits).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });
});
