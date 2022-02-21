jest.mock("node-fetch", () => require("fetch-mock-jest").sandbox());
const fetch = require("node-fetch");
import { Response } from "node-fetch";
import { getCategories, getJoke } from "../src/chuck";
import { expectMessage } from "camp2-helpers";

describe("Promisified Chuck", () => {
  afterEach(() => fetch.reset());

  describe("#getCategories", () => {
    it("should return an array of categories", () => {
      expect.assertions(1);
      const chuckCategory = ["dev"];
      fetch.once(/\w*/, chuckCategory);

      return getCategories().then((result) => {
        let help = "";
        if (result instanceof Response) {
          help = "️👉 You function return a Promise of a Response, did you forget response.json()?️";
        }

        expectMessage(result, help, "warning").toEqual(chuckCategory);
      });
    });
  });

  describe("#getJoke", () => {
    it("Must take one parameter", () => {
      expect.assertions(1);

      expect(getJoke.length).toBe(1);
    });

    it("Must use the category parameter in the url", () => {
      expect.assertions(1);
      const category = "dev";
      const chuckJoke = {
        value:
          "They say curiosity killed the cat. This is false. Chuck Norris killed the cat. Every single one of them.",
      };
      fetch.once(/.*=\w*/, chuckJoke);

      getJoke(category).then((res) => expect(res).toEqual(chuckJoke.value));
    });

    it("Must return a Promise of a string", () => {
      expect.assertions(1);
      const category = "dev";
      const chuckJoke = {
        value:
          "They say curiosity killed the cat. This is false. Chuck Norris killed the cat. Every single one of them.",
      };
      fetch.once(/.*=\w*/, chuckJoke);

      return getJoke(category).then((result: unknown) => {
        let help = "";
        if (result instanceof Response) {
          help = "️👉 You function return a Promise of a Response, did you forget response.json()?️";
        } else if (result instanceof Object && "value" in result) {
          help = "️👉 You function return a Promise of an object, you should add another then to only return the joke.";
        }

        expectMessage(result, help, "warning").toBe(
          "They say curiosity killed the cat. This is false. Chuck Norris killed the cat. Every single one of them.",
        );
      });
    });
  });
});
