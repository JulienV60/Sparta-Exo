import makeAJoke from "../src/makeAJoke";
import * as helpers from "camp2-helpers";
import { jest } from '@jest/globals';

describe("#makeAJoke", () => {
  test("It should use import / export and not require", async () => {
    let code;
    code = await helpers.default.readCode("./src/makeAJoke.js");

    expect(code).not.toMatch("require");
  });

  test("Should be present in the export", () => {
    expect(typeof makeAJoke).toBe("function");
    expect(typeof makeAJoke).not.toBe("undefined");
  });

  test("Use the random joke function", async () => {
    let code;
    code = await helpers.default.readCode("./src/makeAJoke.js");
    expect(code).toMatch("getRandomJoke");
  });

  test("Should print the joke in your console", () => {
    const spy = jest.spyOn(console, "log");

    makeAJoke();

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});
