const consecutiveCount = require("../src/index");

test("Should count the maximum number of times a character occur consecutively", () => {
  expect.assertions(4);

  expect(consecutiveCount("aaabcaaba", "a")).toBe(3);
  expect(consecutiveCount("utuutuuuuutuu", "u")).toBe(5);
  expect(consecutiveCount("azerty", "y")).toBe(1);
  expect(consecutiveCount("utuutuuuuutuuuuuu", "u")).toBe(6);
});

test("Should return 0 when the character is not present", () => {
  expect.assertions(1);

  expect(consecutiveCount("gattaca", "z")).toBe(0);
});
