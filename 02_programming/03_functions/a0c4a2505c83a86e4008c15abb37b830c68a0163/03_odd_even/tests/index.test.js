const oddEven = require("../src/index");

describe("#03_odd_even", () => {
  test("Should return an odd integer", () => {
    expect(oddEven(3)).toEqual("3 is an odd integer.");
  });

  test("Should return an even integer", () => {
    expect(oddEven(4)).toEqual("4 is an even integer.");
  });

  test("0 should return an even integer", () => {
    expect(oddEven(0)).toEqual("0 is an even integer.");
  });

  test("Should check the type of the parameter: is not an integer", () => {
    const types = ["five", 2.3, NaN, true, [], {}, null, undefined, /wowregex/];

    types.forEach((type) => {
      const spy = jest.spyOn(console, "log");
      oddEven(type);

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(`${type} is not an integer.`);

      spy.mockRestore();
    });
  });
});
