import { resolve } from "path";
import { readCode, expectMessage } from "camp2-helpers";
import { findDigit } from "../src/index";

let studentCode: any;
beforeAll(async () => {
  // Loads the student's code
  studentCode = await readCode(resolve(__dirname, "../src/index.ts"));
});

describe("#findDigit function", () => {
  test("your code must not includes 'any' or 'unknown' types", () => {
    expect.assertions(1);

    const usingAnyType = studentCode.includes("any");
    const usingUnknownType = studentCode.includes("unknown");

    expectMessage(
      usingAnyType || usingUnknownType,
      "Smart move to use an 'any' or 'unknown' type, but you must not use it, ever!",
      "warning",
    ).toEqual(false);
  });

  test("it should be a function", () => {
    expect.assertions(1);

    expect(typeof findDigit).toEqual("function");
  });

  test("it should take two parameters", () => {
    expect.assertions(1);

    expect(findDigit.length).toEqual(2);
  });

  test("it should return an array", () => {
    expect.assertions(4);
    const testArray = [1, 23, 456, 7891];

    expect(Array.isArray(findDigit(testArray, 5))).toEqual(true);
    expect(Array.isArray(findDigit(testArray, 0))).toEqual(true);
    expect(findDigit(testArray, 5)).toEqual([456]);
    expect(findDigit(testArray, 0)).toEqual([]);
  });
});
