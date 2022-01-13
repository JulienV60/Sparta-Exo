const tellFortune = require("../src/index");

describe("#02_fortune_teller", () => {
  test("it should call console.log one time", () => {
    expect.assertions(2);

    const spy = jest.spyOn(console, "log");

    tellFortune("a big boy", "a nice place", "someone", 5);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("You will be a big boy in a nice place, and married to someone in 5 years.");

    spy.mockRestore();
  });

  test("it should have four arguments and should be undefined when no arguments are provided", () => {
    expect.assertions(2);

    const spy = jest.spyOn(console, "log");

    tellFortune();

    expect(spy).toHaveBeenCalledWith("You will be undefined in undefined, and married to undefined in undefined years.");
    expect(tellFortune.length).toEqual(4)

    spy.mockRestore();
  });
});
