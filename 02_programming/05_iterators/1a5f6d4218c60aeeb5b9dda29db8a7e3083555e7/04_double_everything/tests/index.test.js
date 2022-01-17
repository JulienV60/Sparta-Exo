const double = require("../src/index");

test("It should double everything", () => {
  expect.assertions(1);

  expect(double([1, 2, 3])).toEqual([2, 4, 6]);
});

test("It should double everything expect 0", () => {
  expect.assertions(1);

  expect(double([1, 2, 3, 0])).toEqual([2, 4, 6, 0]);
});

test("It should double even negative numbers", () => {
  expect.assertions(1);

  expect(double([1, -2, -3, 0])).toEqual([2, -4, -6, 0]);
});
