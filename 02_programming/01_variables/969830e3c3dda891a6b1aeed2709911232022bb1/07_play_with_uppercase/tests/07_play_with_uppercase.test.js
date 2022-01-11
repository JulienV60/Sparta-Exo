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

describe("#07_play_with_uppercase", () => {
  test("bigQuestion should be an uppercased version of question", () => {
    return studentCode.then((code) => {
      const bigQuestion = eval(code + "; bigQuestion;");
      const expectedQuestion = "SPARTAN, WHAT IS YOUR PROFESSION?!";

      expect(bigQuestion).toEqual(expectedQuestion);
    });
  });

  test("bigQuestion should be an uppercased version of question, no matter what value question has", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(
          "spartan, what is your profession"
        ),
        "what is the answer of the question on life, the universe and the rest"
      );

      const bigQuestion = eval(changedStudentCode + "; bigQuestion;");
      const expectedQuestion = "WHAT IS THE ANSWER OF THE QUESTION ON LIFE, THE UNIVERSE AND THE REST?!";

      expect(bigQuestion).toEqual(expectedQuestion);
    });
  });

  test("repeatBigQuestion should be an uppercased version of question but with a different start", () => {
    return studentCode.then((code) => {
      const repeatBigQuestion = eval(code + "; repeatBigQuestion;");
      const expectedQuestion = "I REPEAT, SPARTAN, WHAT IS YOUR PROFESSION?!";

      expect(repeatBigQuestion).toEqual(expectedQuestion);
    });
  });

  test("repeatBigQuestion should be an uppercased version of question but with a different start, no matter what value question has", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(
          "spartan, what is your profession"
        ),
        "what is the answer of the question on life, the universe and the rest"
      );

      const repeatBigQuestion = eval(changedStudentCode + "; repeatBigQuestion;");
      const expectedQuestion = "I REPEAT, WHAT IS THE ANSWER OF THE QUESTION ON LIFE, THE UNIVERSE AND THE REST?!";

      expect(repeatBigQuestion).toEqual(expectedQuestion);
    });
  });
});
