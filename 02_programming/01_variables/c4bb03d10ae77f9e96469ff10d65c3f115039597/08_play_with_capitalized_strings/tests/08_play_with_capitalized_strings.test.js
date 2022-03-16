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

describe("#08_play_with_capitalized_strings", () => {
  test("capitalizedSentence should be a capitalized version of question", () => {
    return studentCode.then((code) => {
      const capitalizedSentence = eval(code + "; capitalizedSentence;");
      const expectedSentence = "Spartan, what is your profession?!";

      expect(capitalizedSentence).toEqual(expectedSentence);
    });
  });

  test("capitalizedSentence should be a capitalized version of question, no matter what value question has", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(
          "spartan, what is your profession"
        ),
        "cortana, what is your mission"
      );

      const capitalizedSentence = eval(changedStudentCode + "; capitalizedSentence;");
      const expectedQuestion = "Cortana, what is your mission?!";

      expect(capitalizedSentence).toEqual(expectedQuestion);
    });
  });
});
