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

describe("#01_play_with_strings", () => {
  test("question should have 'Spartan, what is your profession?!' as a value", () => {
    return studentCode.then((code) => {
      const question = eval(code + "; question;");

      expect(question).toBe("Spartan, what is your profession?!");
    });
  });

  test("answer should have 'Dev dev dev!' as a value", () => {
    return studentCode.then((code) => {
      const question = eval(code + "; answer;");

      expect(question).toBe("Dev dev dev!");
    });
  });
});

