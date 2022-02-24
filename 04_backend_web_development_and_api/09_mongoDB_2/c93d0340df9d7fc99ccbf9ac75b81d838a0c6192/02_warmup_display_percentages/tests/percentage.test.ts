import { humanPercentage } from "../src/percentage";

test("It should return percentages", () => {
  expect.assertions(1);

  const percentages = humanPercentage([0.1, 0.5, 0.8]);

  expect(percentages).toEqual(["10%", "50%", "80%"]);
});

test("It should return rounded percentages", () => {
  expect.assertions(1);

  const percentages = humanPercentage([0.161, 0.518, 0.873]);

  expect(percentages).toEqual(["16%", "52%", "87%"]);
});
