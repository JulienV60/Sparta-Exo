import { greetEveryone } from "../src/greetEveryone";
import { contextFunction } from "../src/context";

it("Should not return anything", () => {
  expect.assertions(1);

  expect(contextFunction(greetEveryone, ["Alex", "Clover", "Sam"])).toBe(undefined);
})

it("Should greet each argument", () => {
  expect.assertions(7);
  let logs = "";
  const spy = jest.spyOn(console, "log").mockImplementation((...text) => {
    logs += text.join(" ");
  });

  contextFunction(greetEveryone, ["Alex", "Clover", "Sam"]);

  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledTimes(4);
  expect(logs).toMatch(/greet/i);
  expect(logs).toMatch(/Welcome/i);
  expect(logs).toMatch(/Alex/);
  expect(logs).toMatch(/Clover/);
  expect(logs).toMatch(/Sam/);
})
