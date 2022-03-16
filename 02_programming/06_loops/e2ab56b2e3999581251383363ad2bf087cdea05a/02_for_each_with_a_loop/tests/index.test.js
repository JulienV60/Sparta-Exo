const helpers = require("camp2-helpers");
const forEachLoop = require("../src/index")

let studentCode;
beforeAll(async() => {
  // Loads the student's code
  studentCode = await helpers.readCode("./src/index.js");
  return studentCode;
});

test("Should apply the function to each element", () => {
  expect.assertions(5);

  jest.spyOn(console, "log")
  console.log.mockImplementation(() => {});

  forEachLoop([1, 2, 3, 4], number => console.log(`* ${number}`));

  expect(console.log).toHaveBeenCalledTimes(4)
  expect(console.log).toHaveBeenCalledWith("* 1");
  expect(console.log).toHaveBeenCalledWith("* 2");
  expect(console.log).toHaveBeenCalledWith("* 3");
  expect(console.log).toHaveBeenCalledWith("* 4");

  console.log.mockRestore();
});

test("`.forEach` should not be used", () => {
  expect.assertions(1);

  const forRegexp = /\.forEach\s*\(/

  expect(forRegexp.test(studentCode)).toBe(false);
});
