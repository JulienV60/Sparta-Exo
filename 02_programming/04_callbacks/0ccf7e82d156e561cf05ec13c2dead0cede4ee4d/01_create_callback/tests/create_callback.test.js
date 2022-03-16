const { readCode, findNode } = require("camp2-helpers");
const sayHello = require("../src/callback");

const functionType = (func) => {
  if (func.declarations && func.declarations[0]) {
    return func.declarations[0].init.type;
  }
  return "FunctionExpression";
};

describe("#sayHello", () => {
  test("Should be an arrow function", async () => {
    const code = await readCode("./src/callback.js");
    const sayHelloFunction = findNode(code, "sayHello");

    expect(typeof sayHello).toBe("function");
    expect(functionType(sayHelloFunction)).toBe("ArrowFunctionExpression");
  });

  test("Should take one parameter", () => {
    expect(sayHello.length).toBe(1);
  });

  test("Should greet the player by its name", () => {
    const spy = jest.spyOn(console, "log");

    sayHello({ name: "Spartacus" });
    expect(spy).toHaveBeenCalledWith("Hello, Spartacus");
    spy.mockRestore();
  });
});
