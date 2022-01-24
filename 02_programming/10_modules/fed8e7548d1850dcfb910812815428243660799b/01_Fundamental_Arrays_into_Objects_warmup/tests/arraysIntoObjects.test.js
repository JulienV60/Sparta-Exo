import arraysIntoObjects from "../src/arraysIntoObjects";
import * as helpers from "camp2-helpers";
import { jest } from '@jest/globals';

describe("#arraysIntoObjects", () => {
  test("Should return an object", async () => {

    const result = arraysIntoObjects(["test"], ["done"]);

    expect(result).not.toBe(undefined);
    expect(typeof result).toBe("object");

  });

  test("Should return the correct object", () => {

    const result = arraysIntoObjects(["name", "job"], ["Tintin", "Reporter"]);

    expect(result).toEqual({name: "Tintin", job: "Reporter"});
  });

  test("Should work if the parameters are empty arrays", () => {
    const result = arraysIntoObjects([], []);

    expect(result).toEqual({});
  });
});
