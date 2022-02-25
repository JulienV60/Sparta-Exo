import { resolve } from "path";
import { readCode, findNode, expectMessage } from "camp2-helpers";
import { rectangle } from "../src/rectangle";

let studentCode: any;

beforeAll(() => {
  // Loads the student's code
  studentCode = readCode(resolve(__dirname, "../src/rectangle.ts"));
  return studentCode;
});

test("it should return rectangles", () => {
  expect.assertions(3);

  expect(rectangle(2, 2)).toBe("**\n**\n");
  expect(rectangle(5, 4)).toBe("*****\n*****\n*****\n*****\n");
  expect(rectangle(4, 3)).toBe("****\n****\n****\n");
});

test("your code should not includes a loop", () => {
  return studentCode.then((code: string) => {
    let usingLoop = false;

    if (
      /for/.test(code) ||
      /while/.test(code) ||
      /forEach/.test(code) ||
      /map/.test(code)
    ) {
      usingLoop = true;
    }

    expectMessage(
      usingLoop,
      "Smart move to use a loop, but you must use both your `column` and `line` functions instead!",
      "warning"
    ).toEqual(false);
  });
});
