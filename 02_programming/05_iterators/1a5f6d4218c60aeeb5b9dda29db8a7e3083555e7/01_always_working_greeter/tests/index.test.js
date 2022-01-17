const helpers = require("camp2-helpers");
const greeter = require("../src/index")

let studentCode;
beforeAll(async() => {
  // Loads the student's code
  studentCode = await helpers.readCode("./src/index.js");
  return studentCode;
});

test("print 'Hello <name>!' For every person", () => {
  expect.assertions(4);

  jest.spyOn(console, "log")
  console.log.mockImplementation(() => {});
  greeter(["Joe", "Mike", "Robert"]);

  expect(console.log).toHaveBeenCalledTimes(3)
  expect(console.log).toHaveBeenCalledWith("Hello Joe!");
  expect(console.log).toHaveBeenCalledWith("Hello Mike!");
  expect(console.log).toHaveBeenCalledWith("Hello Robert!");

  console.log.mockRestore();
});

test("`forEach` should have been used", () => {
  expect.assertions(1);

  expect(studentCode.includes(".forEach")).toBe(true);
});

test("No accessing by index is needed", () => {
  expect.assertions(2);

  const functionContentRegex = /function greeter.*?{([\s\S]*?)}/gm;
  const [, code] = functionContentRegex.exec(studentCode);
  expect(code.trim()).not.toBe("");

  const usingIndexes = /function greeter.*?{[\s\S]*?\w\[\d+\][\s\S]*?}/gm;

  expect(usingIndexes.test(studentCode)).toBe(false);
});
