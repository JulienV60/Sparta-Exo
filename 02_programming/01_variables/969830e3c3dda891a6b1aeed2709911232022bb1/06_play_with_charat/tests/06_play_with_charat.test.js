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

describe("#06_play_with_charat", () => {
  test("letterAtThirdPosition should equal to the third character of the question", () => {
    return studentCode.then((code) => {
      const letterAtThirdPosition = eval(code + "; letterAtThirdPosition;");
      const expectedLetter = "a";

      expect(letterAtThirdPosition).toEqual(expectedLetter);
    });
  });

  test("letterAtThirdPosition should equal to the third character of question, no matter what value this character has", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(
          "spartan, what is your profession"
        ),
        "sportan, what is your profession"
      );

      const letterAtThirdPosition = eval(changedStudentCode + "; letterAtThirdPosition;");
      const expectedLetter = "o";

      expect(letterAtThirdPosition).toEqual(expectedLetter);
    });
  });

  test("letterAtFourthPosition should equal to the fourth character of question", () => {
    return studentCode.then((code) => {
      const letterAtFourthPosition = eval(code + "; letterAtFourthPosition;");
      const expectedLetter = "The letter at the fourth position is r";

      expect(letterAtFourthPosition).toEqual(expectedLetter);
    });
  });

  test("letterAtFourthPosition should equal to the fourth character of question, no matter what value this character has", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(
          "spartan, what is your profession"
        ),
        "spastan, what is your profession"
      );

      const letterAtFourthPosition = eval(changedStudentCode + "; letterAtFourthPosition;");
      const expectedLetter = "The letter at the fourth position is s";

      expect(letterAtFourthPosition).toEqual(expectedLetter);
    });
  });
});
