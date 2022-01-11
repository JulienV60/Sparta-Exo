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

describe("#05_play_with_slice", () => {
  test("hobbyQuestion should replace profession by hobby", () => {
    return studentCode.then((code) => {
      const hobbyQuestion = eval(code + "; hobbyQuestion;");
      const expectedQuestion = "spartan, what is your hobby?!";

      expect(hobbyQuestion).toEqual(expectedQuestion);
    });
  });

  test("hobbyQuestion should replace profession by hobby, no matter what the first 21 characters of the sentence are", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(
          "spartan, what is your profession"
        ),
        "spartan, this is your profession"
      );

      const hobbyQuestion = eval(changedStudentCode + "; hobbyQuestion;");
      const expectedQuestion = "spartan, this is your hobby?!";

      expect(hobbyQuestion).toEqual(expectedQuestion);
    });
  });

  test("hobbyQuestionLength should equal to the length of question", () => {
    return studentCode.then((code) => {
      const hobbyQuestionLength = eval(code + "; hobbyQuestionLength;");

      const expectedLength = 29;

      expect(hobbyQuestionLength).toEqual(expectedLength);
    });
  });

  test("hobbyQuestionLength should equal to the length of question, no mater how long it is", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(
          "spartan, what is your profession"
        ),
        "yes?"
      );
      const hobbyQuestionLength = eval(changedStudentCode + "; hobbyQuestionLength;");
      const expectedLength = 14;

      expect(hobbyQuestionLength).toEqual(expectedLength);
    });
  });
});
