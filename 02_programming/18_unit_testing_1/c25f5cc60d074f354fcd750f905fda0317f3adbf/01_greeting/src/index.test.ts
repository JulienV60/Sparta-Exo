import { greet } from "./index";

test("Function greet() return Hello WORLD! ", () => {
  expect.assertions(1);
  expect(greet()).toBe("Hello WORLD!");
});
test("Function greet(Francis) returns Hello FRANCIS", () => {
  expect.assertions(1);
  expect(greet("Francis")).toBe("Hello FRANCIS!");
});
