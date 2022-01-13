const helloSpartan = require("../src/index");

describe("#04_default_parameters", () => {
  test("it should call console.log one time", () => {
    expect.assertions(3);

    const spy = jest.spyOn(console, "log");

    helloSpartan("John");

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("Hello John: glad to know your name!");
    expect(helloSpartan.length).toEqual(0)

    spy.mockRestore();
  });

  test("it should logs a default parameter when no arguments are provided", () => {
    expect.assertions(2);

    const spy = jest.spyOn(console, "log");

    helloSpartan();

    expect(spy).toHaveBeenCalledWith("Hello soldier; not very talkative uh?");
    expect(helloSpartan.length).toEqual(0)

    spy.mockRestore();
  });

    test("it should logs `soldier` when provided as argument", () => {
    expect.assertions(3);

    const spy = jest.spyOn(console, "log");

    helloSpartan("soldier");

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("Hello soldier; not very talkative uh?");
    expect(helloSpartan.length).toEqual(0)

    spy.mockRestore();
  });
});
