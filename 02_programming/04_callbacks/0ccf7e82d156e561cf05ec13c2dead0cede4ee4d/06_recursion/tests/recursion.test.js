// /* global beforeAll test expect */
const path = require("path");
const readcode = require("./readcode");
const findPosition = require("../src/recursion.js");

let studentCode;
const array = ["Isaac", "Maggie", "Cain", "Judas", "???", "Eve", "Samson", "Azazel"];
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

beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(path.resolve(__dirname, "../src/index.js"));
  return studentCode;
});

describe("#findPosition", () => {
  test("Should take three parameter", () => {
    expect(findPosition.length).toBe(3);
  });

  test("Should return a string", () => {
    expect(typeof findPosition(array, "Cain", 0)).toBe("string");
    expect(typeof findPosition(array, "Lazarus", 0)).toBe("string");
  });

  test("Should return the right result when a given string is found in the given array", () => {
    array.forEach((character, index) =>
      expect(findPosition(array, character, 0)).toBe(`${character} is at position #${index + 1} in this array.`),
    );
  });

  test("Should return the right result when a given string is not found in the given array", () => {
    expect(findPosition(array, "Eden", 0)).toBe("Eden is not present in this array.");
  });

  test("Should throw an error when a parameter is not of its expected type", () => {
    const arrayParameterErrors = [];
    const stringParameterErrors = [];
    const numberParameterErrors = [];

    nonExpectedParams.forEach((element) => {
      try {
        findPosition([element], "person", 0);
      } catch (e) {
        arrayParameterErrors.push(e);
      }
    });

    expect(arrayParameterErrors.length).toBe(nonExpectedParams.length);

    nonExpectedParams.forEach((element) => {
      try {
        findPosition(["person"], element, 0);
      } catch (e) {
        stringParameterErrors.push(e);
      }
    });

    expect(stringParameterErrors.length).toBe(nonExpectedParams.length);

    nonExpectedParams.forEach((element) => {
      try {
        findPosition(["person"], "person", element);
      } catch (e) {
        numberParameterErrors.push(e);
      }
    });

    expect(numberParameterErrors.length).toBe(nonExpectedParams.length);
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
