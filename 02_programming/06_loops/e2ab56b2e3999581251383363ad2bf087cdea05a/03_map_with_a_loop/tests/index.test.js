const helpers = require("camp2-helpers");
const mapLoop = require("../src/index")

let studentCode;
beforeAll(async() => {
  // Loads the student's code
  studentCode = await helpers.readCode("./src/index.js");
  return studentCode;
});

test("Should return an array where each element has passed through the function", () => {
  expect.assertions(3);

  jest.spyOn(console, "log")
  console.log.mockImplementation(() => {});

  const poweredNumbers = mapLoop([1, 2, 3, 4], number => number * number);
  expect(poweredNumbers).toEqual([1, 4, 9, 16])

  const doubleNumbers = mapLoop([1, 2, 3, 4], number => number * 2);
  expect(doubleNumbers).toEqual([2, 4, 6, 8])

  expect(console.log).not.toHaveBeenCalled()

  console.log.mockRestore();
});

test("`.map` should not be used", () => {
  expect.assertions(1);

  const forRegexp = /\.map\s*\(/

  expect(forRegexp.test(studentCode)).toBe(false);
});
