const letterCount = require("../src/index");

test("Should count the number of times a character occur", () => {
  expect.assertions(5);

  expect(letterCount("gattaca", "a")).toBe(3);
  expect(letterCount("gattaca", "g")).toBe(1);
  expect(letterCount("azerty", "y")).toBe(1);

  expect(letterCount("a string with spaces", " ")).toBe(3);
  expect(letterCount("biip bip bop bip bop", "i")).toBe(4);
});

test("Should return 0 when the character is not present", () => {
  expect.assertions(1);

  expect(letterCount("gattaca", "z")).toBe(0);
});
