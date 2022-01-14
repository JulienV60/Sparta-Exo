const getInput = require("../src/getInput");

describe("#getInput", () => {
  test("Should be a function", () => {
    expect(typeof getInput).toBe("function");
  });

  test("Should take two parameters", () => {
    expect(getInput.length).toBe(2);
  });

  test("Should use the callback function", () => {
    const fakeLog = jest.spyOn(console, "log").mockImplementation(() => {});
    getInput({ user: "Toto", key: "A" }, (text) => console.log(text));
    expect(fakeLog).toHaveBeenCalledWith("A");
    fakeLog.mockRestore();
  });
});
