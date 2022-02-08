import { context } from "../src/context";
import * as squareFunction from "../src/squareNumber";

jest.mock('../src/squareNumber');

afterEach(() => {
  jest.clearAllMocks();
});

it("Should be able to square every number of a list", () => {
  expect.assertions(1);
  const spy = jest.spyOn(squareFunction, "squareNumber").mockImplementation((x) => x*x);

  
  const result = context([0, 2, 6]);
  
  expect(result).toEqual([0, 4, 36]);
});


it("should use the squareNumber function", () => {
  const spy = jest.spyOn(squareFunction, "squareNumber").mockImplementation((x) => x*x);
  const result = context([1, 2, 3, 4, 5]);

  expect(result).not.toBe(undefined);
  expect(spy.mock.calls.length).toBe(5);
});
