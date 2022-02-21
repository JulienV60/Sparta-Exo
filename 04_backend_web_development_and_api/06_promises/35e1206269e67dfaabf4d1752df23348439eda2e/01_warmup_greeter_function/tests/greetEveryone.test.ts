import { greetEveryone } from "../src/greetEveryone";

it("Should not return anything", () => {
  expect.assertions(1);

  expect(greetEveryone("Alex", "Clover", "Sam")).toBe(undefined);
});

it("Should greet each argument", () => {
  expect.assertions(5);
  let logs = "";
  const spy = jest.spyOn(console, "log").mockImplementation((...text) => {
    logs += text.join(" ");
  });

  greetEveryone("Alex", "Clover", "Sam");

  expect(spy).toHaveBeenCalled();
  expect(logs).toMatch(/Welcome/i);
  expect(logs).toMatch(/Alex/);
  expect(logs).toMatch(/Clover/);
  expect(logs).toMatch(/Sam/);

  spy.mockRestore();
})
