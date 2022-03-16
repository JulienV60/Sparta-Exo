import { waitFor } from "../src/index";

test("It should return a Promise", () => {
  expect.assertions(1);

  const result = waitFor(1);

  expect(result instanceof Promise).toBe(true);
});

test("It should use `setTimeout` internally", () => {
  expect.assertions(1);

  const spy = jest.spyOn(global, "setTimeout");

  return waitFor(1).then(() => {
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

test("It should pass the time amount to `setTimeout`", () => {
  expect.assertions(1);

  const spy = jest.spyOn(global, "setTimeout");

  return waitFor(42).then(() => {
    expect(spy.mock.calls[0][1]).toBe(42);
    spy.mockRestore();
  });
})

test("It should wait for the amount of time passed as argument", () => {
  expect.assertions(1);

  const startOfTest = Date.now();

  return waitFor(2500).then(() => {
    const elapsedTime = Date.now() - startOfTest;
    const timeDifference = elapsedTime - 2500;

    expect(timeDifference).toBeLessThan(50);
  });
});
