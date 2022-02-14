import { lottery_draw } from "../src/lottery_draw";

it("Should use Math.random to generate random numbers", () => {
  expect.assertions(1);
  jest.spyOn(global.Math, 'random').mockReturnValue(0.42);

  const result = lottery_draw();

  expect(result).toEqual([42, 42, 42, 42, 42, 42]);
});

it("Should include 100", () => {
  expect.assertions(1);
  jest.spyOn(global.Math, 'random').mockReturnValue(0.99999999);

  const result = lottery_draw();

  expect(result).toEqual([100, 100, 100, 100, 100, 100]);
});

it("Should include 0", () => {
  expect.assertions(1);
  jest.spyOn(global.Math, 'random').mockReturnValue(0);

  const result = lottery_draw();

  expect(result).toEqual([0, 0, 0, 0, 0, 0]);
});

it("Should generate an array of 6 numbers", () => {
  expect.assertions(7);
  jest.spyOn(global.Math, 'random').mockReturnValue(0.42);

  const result = lottery_draw();

  expect(result.length).toBe(6);
  expect(typeof result[0]).toBe("number");
  expect(typeof result[1]).toBe("number");
  expect(typeof result[2]).toBe("number");
  expect(typeof result[3]).toBe("number");
  expect(typeof result[4]).toBe("number");
  expect(typeof result[5]).toBe("number");
});

it("Every array should be different", () => {
  expect.assertions(4);
  jest.spyOn(global.Math, 'random').mockRestore();

  const result_one = lottery_draw();
  const result_two = lottery_draw();
  const result_three = lottery_draw();
  const result_four = lottery_draw();

  let equality = (JSON.stringify(result_one) === JSON.stringify(result_two)) && (JSON.stringify(result_three) === JSON.stringify(result_two)) && (JSON.stringify(result_three) === JSON.stringify(result_four))

  expect(result_one).not.toEqual(result_two);
  expect(result_two).not.toEqual(result_three);
  expect(result_three).not.toEqual(result_four);
  expect(equality).toBe(false);
});
