import * as capitalizeFunction from "../src/capitalize";
import {context} from "../src/context"

afterEach(() => {
  jest.clearAllMocks();
});

it("Should be able to capitalize every first letter of every word of a sentence", () => {
  expect.assertions(1);
  const nameOne = context("he who must not be named");

  expect(nameOne).toEqual("He Who Must Not Be Named");
});


it("should use the capitalize function for each word", () => {
  const spy = jest.spyOn(capitalizeFunction, "capitalize").mockImplementation((x) => (x.charAt(0).toUpperCase() + x.slice(1)));
  const result = context("you know who");

  expect(result).not.toBe(undefined);
  expect(spy.mock.calls.length).toBe(3);
});
