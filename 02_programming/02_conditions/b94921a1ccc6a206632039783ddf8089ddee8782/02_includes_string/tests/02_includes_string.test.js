const path = require("path");
const readcode = require("./readcode");

let studentCode;
beforeAll(() => {
  studentCode = readcode(path.resolve(__dirname, "../src/index.js"));
  return studentCode;
});

describe("#02_includes_string", () => {
  test("areMyWordsInTheSentence should be bound to the value of includes on sentence with myWords", () => {
    return studentCode.then((code) => {
      const areMyWordsInTheSentence = eval(code + "; areMyWordsInTheSentence;");

      expect(areMyWordsInTheSentence).toBe(true);
    });
  });

  test("Changing myWords's value should change areMyWordsInTheSentence's value to", () => {
    return studentCode.then((code) => {
      const changedCode = code.replace(
        `const myWords = "programming languages";`, // eslint-disable-line quotes
        `const myWords = "this text that isn't in that speech";` // eslint-disable-line quotes
      );

      const areMyWordsInTheSentence = eval(changedCode + "; areMyWordsInTheSentence;");

      expect(areMyWordsInTheSentence).toBe(false);
    });
  });

  test("It should log the right message when the words you search are in the sentence", () => {
    return studentCode.then((code) => {
      const fakeLog = jest.spyOn(console, "log")
        .mockImplementation((log) => log);

      eval(code);

      expect(fakeLog).toHaveBeenCalledWith("Yes, they are talking about programming languages");
      fakeLog.mockRestore();
    });
  });

  test("It should log the right message when the words you search are in the sentence, no matter what words you search", () => {
    return studentCode.then((code) => {
      const changedCode = code.replace(
        `const myWords = "programming languages";`, // eslint-disable-line quotes
        `let myWords = "an iconic language";` // eslint-disable-line quotes
      );

      const fakeLog = jest.spyOn(console, "log")
        .mockImplementation((log) => log);

      eval(changedCode);

      expect(fakeLog).toHaveBeenCalledWith("Yes, they are talking about an iconic language");
      fakeLog.mockRestore();
    });
  });

  test("It should log the other message when the words you search aren't in the sentence", () => {
    return studentCode.then((code) => {
      const changedCode = code.replace(
        `const myWords = "programming languages";`, // eslint-disable-line quotes
        `const myWords = "this text that isn't in that speech";` // eslint-disable-line quotes
      );

      const fakeLog = jest.spyOn(console, "log")
        .mockImplementation((log) => log);

      eval(changedCode);

      expect(fakeLog).toHaveBeenCalledWith("Sadly, they are not talking about this text that isn't in that speech");
      fakeLog.mockRestore();
    });
  });
});
