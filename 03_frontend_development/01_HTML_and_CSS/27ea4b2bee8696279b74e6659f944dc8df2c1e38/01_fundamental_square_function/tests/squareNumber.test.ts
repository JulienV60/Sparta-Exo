import { squareNumber } from "../src/squareNumber";

it("Should be able to square a number", () => {
  expect.assertions(2);

  const result_one = squareNumber(5);
  const result_two = squareNumber(10);

  expect(result_one).toEqual(25);
  expect(result_two).toEqual(100);
});
