import * as lotteryFunction from "../src/lottery_draw";
import { checkIfIWon } from "../src/check";

it("Should return undefined", () => {
  expect.assertions(1);

  const spy = jest.spyOn(console, "log").mockImplementation();

  const result = checkIfIWon([42, 42, 42]);

  expect(result).toBe(undefined);
  spy.mockRestore();
});

it("Should console log 'You won the lottery!' when the ticket is the same", () => {
  expect.assertions(2);
  jest.spyOn(global.Math, "random").mockReturnValue(0);
  const spy = jest.spyOn(console, "log").mockImplementation();

  const result = checkIfIWon([0, 0, 0]);

  expect(spy).toHaveBeenCalled();
  expect(spy).toBeCalledWith("You won the lottery!");
  spy.mockRestore();
});

it("Should not console log 'You won the lottery!' when the ticket are different", () => {
  expect.assertions(2);
  jest.spyOn(global.Math, "random").mockReturnValue(0);
  const spy = jest.spyOn(console, "log").mockImplementation();

  const result = checkIfIWon([3, 3, 3]);

  expect(spy).toHaveBeenCalled();
  expect(spy).not.toHaveBeenCalledWith("You won the lottery!");
  spy.mockRestore();
});

it("Should console log 'You lost...' when the ticket is not the same", () => {
  expect.assertions(2);
  jest.spyOn(global.Math, "random").mockReturnValue(0);
  const spy = jest.spyOn(console, "log").mockImplementation();

  const result = checkIfIWon([3, 3, 3]);

  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith("You lost...");
  spy.mockRestore();
});

it("Should not console log 'You lost...' when the ticket is the same", () => {
  expect.assertions(2);
  jest.spyOn(global.Math, "random").mockReturnValue(0.9999999);
  const spy = jest.spyOn(console, "log").mockImplementation();

  const result = checkIfIWon([3, 3, 3]);

  expect(spy).toHaveBeenCalled();
  expect(spy).not.toHaveBeenCalledWith("You lost...");
  spy.mockRestore();
});

it("Should use the lottery_draw function", () => {
  expect.assertions(1);

  const log = jest.spyOn(console, "log").mockImplementation();
  const spy = jest
    .spyOn(lotteryFunction, "lottery_draw")
    .mockImplementation(() => [42, 42, 42]);

  const result = checkIfIWon([42, 42, 42]);

  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
  log.mockRestore();
});
