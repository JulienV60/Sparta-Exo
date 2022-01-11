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

describe("#04_play_with_length", () => {
  test("questionLength should equal to the length of question", () => {
    return studentCode.then((code) => {
      const questionLength = eval(code + "; questionLength;");
      const expectedLength = 34;

      expect(questionLength).toEqual(expectedLength);
    });
  });

  test("questionLength should equal to the length of question, no mater how long it is", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(
          "spartan, what is your profession"
        ),
        "yes?"
      );
      const questionLength = eval(changedStudentCode + "; questionLength;");
      const expectedLength = 6;

      expect(questionLength).toEqual(expectedLength);
    });
  });
});
