const helpers = require("camp2-helpers");
const triangle = require("../src/index");

let studentCode;
beforeAll(async () => {
  // Loads the student's code
  studentCode = await helpers.readCode("./src/index.js");
  return studentCode;
});

test("A size of 0 should not display anything", () => {
  expect.assertions(1);

  jest.spyOn(console, "log");
  console.log.mockImplementation(() => {});
  triangle(0);

  expect(console.log).not.toHaveBeenCalled();

  console.log.mockRestore();
});


test("A size of 1 should display only one dot", () => {
  expect.assertions(1);

  jest.spyOn(console, "log");
  console.log.mockImplementation(() => {});
  triangle(1);

  expect(console.log).toHaveBeenCalledWith("*");

  console.log.mockRestore();
});

test("A size of 5 should display a right triangle of 5 lines", () => {
  expect.assertions(1);

  jest.spyOn(console, "log");
  console.log.mockImplementation(() => {});
  triangle(5);
  const result = console.log.mock.calls.flat().join("\n");

  expect(result).toBe(
`*
**
***
****
*****`)

  console.log.mockRestore();
});

test("A size of 15 should display a right triangle of 15 lines", () => {
  expect.assertions(1);

  jest.spyOn(console, "log");
  console.log.mockImplementation(() => {});
  triangle(15);

  const result = console.log.mock.calls.flat().join("\n");

  expect(result).toBe(
`*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************
**************
***************`)

  console.log.mockRestore();
});

