const { slice, makeSandwich } = require("../src/index");

describe("slice", () => {
  test("It should return sliced ingredients", () => {
    expect.assertions(1);

    const ingredients = slice(["ham", "tomato", "pickles", "onion"]);

    expect(ingredients).toEqual(["sliced ham", "sliced tomato", "sliced pickles", "sliced onion"]);
  });
});

describe("makeSandwich", () => {
  test("It should work with sliced ingredients", () => {
    expect.assertions(1);

    const sandwich = makeSandwich(["sliced ham", "sliced tomato", "sliced pickles", "sliced onion"]);

    expect(sandwich).toBe("A tasty sandwich made of ham, tomato, pickles, onion");
  });

  test("It should not work when one ingredient is not sliced", () => {
    expect.assertions(1);

    const sandwich = makeSandwich(["sliced ham", "tomato", "sliced pickles", "sliced onion"]);

    expect(sandwich).toBe("I can't make a sandwich with non-sliced ingredients");
  });
});
