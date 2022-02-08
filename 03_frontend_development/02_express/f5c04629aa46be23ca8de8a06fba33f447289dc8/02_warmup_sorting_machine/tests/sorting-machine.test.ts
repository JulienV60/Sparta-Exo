import { resolve } from "path";
import { readCode, findNode, expectMessage } from "camp2-helpers";
import { sortingMachine } from "../src/index";

let studentCode: any;
beforeAll(async () => {
  // Loads the student's code
  studentCode = await readCode(resolve(__dirname, "../src/index.ts"));
});

describe("#sortingMachine function", () => {
  test("it should be a function", () => {
    expect.assertions(1);

    expect(typeof sortingMachine).toEqual("function");
  });

  test("it should return an array", () => {
    expect.assertions(1);

    const returnedArray = sortingMachine([1, 3, 2], true)

    expect(Array.isArray(returnedArray)).toBe(true);
  });

  test("it should return the numbers in ascending number when the second parameter is true", () => {
    expect.assertions(1);

    const returnedArray = sortingMachine([1, 3, 2], true);
    const expectedValue = [1, 2, 3];

    expect(returnedArray).toEqual(expectedValue);
  });

  test("it should return the numbers in descending number when the second parameter is false", () => {
    expect.assertions(1);

    const returnedArray = sortingMachine([10000, 104, 99, 2000, 3000, 1500], false);
    const expectedValue = [10000, 3000, 2000, 1500, 104, 99];

    expect(returnedArray).toEqual(expectedValue);
  });
});
