import { resolve } from "path";
import { readCode, expectMessage } from "camp2-helpers";
import { slotMachine } from "../src/index";

let studentCode: any;
beforeAll(async () => {
  // Loads the student's code
  studentCode = await readCode(resolve(__dirname, "../src/index.ts"));
});

describe("#slotMachine function", () => {
  test("your code must not includes the 'any' type", () => {
    expect.assertions(1);

    const usingAnyType = studentCode.includes("any");

    expectMessage(usingAnyType, "Smart move to use an 'any' type, but you must not use it, ever!", "warning").toEqual(
      false,
    );
  });

  test("it should be a function", () => {
    expect.assertions(1);

    expect(typeof slotMachine).toEqual("function");
  });

  test("it should take one parameter", () => {
    expect.assertions(1);

    expect(slotMachine.length).toEqual(1);
  });

  test("it should return a boolean with any type of parameter", () => {
    expect.assertions(16);

    const symbols = [
      "",
      [],
      {},
      null,
      2.5,
      /5/,
      () => {
        null;
      },
    ];

    symbols.forEach((symbol) => {
      expect(typeof slotMachine([symbol, symbol, symbol])).toEqual("boolean");
      expect(slotMachine([symbol, symbol, symbol])).toEqual(true);
    });

    expect(typeof slotMachine([1, "", false])).toEqual("boolean");
    expect(slotMachine([1, "", false])).toEqual(false);
  });
});
