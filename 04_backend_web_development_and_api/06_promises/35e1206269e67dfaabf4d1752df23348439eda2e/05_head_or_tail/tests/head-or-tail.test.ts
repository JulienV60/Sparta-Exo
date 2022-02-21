import { headOrTail } from "../src/head-or-tail";

test("It should return a Promise", () => {
  expect.assertions(1);

  const result = headOrTail("head").catch(() => {});

  expect(result instanceof Promise).toBe(true);
});

test("It should return a Promise of a string when the user guesses right", () => {
  expect.assertions(1);

  const random = jest.spyOn(Math, "random").mockImplementation(() => 0);

  headOrTail("head")
    .then((successString) => {
      expect(successString).toBe("Well done.");

      random.mockRestore();
    })
    .catch(() => {});
});

test("It should reject the Promise when the user guesses wrong", () => {
  expect.assertions(1);

  const random = jest.spyOn(Math, "random").mockImplementation(() => 0.99);

  headOrTail("head")
    .catch((errorString) => {
      expect(errorString).toBe("Nope.");

      random.mockRestore();
    });
});
