import { sumTwoSmallestNumbers } from "../src/index";

it("Should return the sum of the lowest two numbers of an array", () => {
  expect.assertions(3);

  expect(sumTwoSmallestNumbers([23, 71, 33, 82, 11])).toBe(34);
  expect(sumTwoSmallestNumbers([1, 2, 3, 4, 5])).toBe(3);
  expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).toBe(6);
});

if (process.env.BONUS_TEST) {
  describe("Bonus", () => {
    it("Should throw an error if there are less than 4 numbers", () => {
      expect.assertions(1);

      expect(() => {
        sumTwoSmallestNumbers([1, 2]);
      }).toThrow();
    });

    it("Should throw an error if there are non positive numbers", () => {

      expect.assertions(1);

      expect(() => {
        sumTwoSmallestNumbers([-1, 3, 4, 2]);
      }).toThrow();
    })
  });
}
