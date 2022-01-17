// /* global beforeAll test expect */
const path = require("path");
const readcode = require("./readcode");
const decodeMorse = require("../src/decodeMorse.js");

let studentCode;

beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(path.resolve(__dirname, "../src/index.js"));
  return studentCode;
});

describe("#decodeMorse", () => {
  test("Should take four parameter", () => {
    expect(decodeMorse.length).toBe(3);
  });

  test("Should return a string", () => {
    const morseCode = ".... . -.--   .--- ..- -.. .";
    const morseCode2 = "... --- ...";
    expect(typeof decodeMorse(morseCode, 0, "")).toBe("string");
    expect(typeof decodeMorse(morseCode2, 0, "")).toBe("string");
  });

  test("Should return the right translation", () => {
    const morseCode = ".... . -.--   .--- ..- -.. .";
    const morseCode2 = "... --- ...";
    expect(decodeMorse(morseCode, 0, "")).toBe("HEY JUDE");
    expect(decodeMorse(morseCode2, 0, "")).toBe("SOS");
  });

  test("Should throw an error when the morse code isn't a string", () => {
    const errors = [];
    const nonExpectedParams = [
      [],
      {},
      null,
      2.5,
      /5/,
      () => {
        null;
      },
    ];

    nonExpectedParams.forEach((element) => {
      try {
        decodeMorse(element, 0, "");
      } catch (e) {
        errors.push(e);
      }
    });

    expect(errors.length).toBe(nonExpectedParams.length);
  });

  test("Should be written without a loop", () => {
    return studentCode.then((code) => {
      let usingLoop = false;

      if (/for/.test(code) || /while/.test(code) || /forEach/.test(code) || /map/.test(code)) {
        usingLoop = true;
        console.warn("Smart move to use a loop, but no loops authorized for this exercise!");
      }

      expect(usingLoop).not.toEqual(true);
    });
  });
});
