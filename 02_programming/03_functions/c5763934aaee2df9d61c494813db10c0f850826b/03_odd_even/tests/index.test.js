const oddEven = require("../src/index");

describe("#03_odd_even", () => {
  test("Should return an odd number", () => {
    expect(oddEven(3)).toEqual("3 is an odd number.");
  });

  test("Should return an even number", () => {
    expect(oddEven(4)).toEqual("4 is an even number.");
  });

  test("0 should return an odd number", () => {
    expect(oddEven(0)).toEqual("0 is an even number.");
  });

  test("Should check the type of the parameter: is not a number", () => {
    const types = ["five", 2.3, NaN, true, [], {}, null, undefined, /wowregex/];

    types.forEach((type) => {
      const spy = jest.spyOn(console, "log");
      oddEven(type);

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(`${type} is not a number.`);

      spy.mockRestore();
    });
  });
});
