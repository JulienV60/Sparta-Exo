// @ts-nocheck

jest.mock("@fewlines-education/request");
const { getChuckNorrisJoke } = require("../src/getChuckNorrisJoke");
const { getCategories } = require("../src/getCategories");
const request = require("@fewlines-education/request");

const mockedJoke = {
  value: "When Chuck Norris throws exceptions, it's across the room.",
};
const mockedJokeRequest = (url, ...params) => {
  params[params.length - 1](null, JSON.stringify(mockedJoke));
};

const mockedCategoriesRequest = (url, ...params) => {
  params[params.length - 1](null, JSON.stringify(["animal", "dev"]));
};

describe("Chuck Norris API", () => {
  describe("#getCategories", () => {
    afterAll(() => {
      request.default.mockReset();
    });

    it("Must use '@fewlines-education/request' package to get a list of categories", async () => {
      expect.assertions(2);

      const spyLog = jest.spyOn(console, "log").mockImplementation();
      request.default.mockImplementation(mockedCategoriesRequest);

      await getCategories();

      expect(request.default).toHaveBeenCalled();
      expect(request.default.mock.calls[0][0]).toBe("https://api.chucknorris.io/jokes/categories");
      spyLog.mockRestore();
    });

    it("Must print the error with 'console.error' when the API respond with error", async () => {
      const spyLogError = jest.spyOn(console, "error").mockImplementation();
      expect.assertions(1);

      request.default.mockImplementationOnce((...params) => {
        params[params.length - 1](new Error("This is a fake error"));
      });

      await getCategories();

      expect(spyLogError).toHaveBeenCalled();
      spyLogError.mockRestore();
    });

    it("Must not print anything with 'console.log' when an error is throwned", async () => {
      expect.assertions(3);

      const spyLog = jest.spyOn(console, "log").mockImplementation();
      const spyLogError = jest.spyOn(console, "error").mockImplementation();
      request.default.mockImplementationOnce((...params) => {
        params[params.length - 1](new Error("This is a fake error"));
      });

      await getCategories();

      expect(spyLog).not.toHaveBeenCalled();
      expect(spyLogError).toHaveBeenCalled();
      expect(request.default).toHaveBeenCalled();
      spyLog.mockRestore();
      spyLogError.mockRestore();
    });

    it("Must print a list of categories with 'console.log'", async () => {
      expect.assertions(2);

      request.default.mockImplementationOnce(mockedCategoriesRequest);
      const spyLog = jest.spyOn(console, "log").mockImplementation((string) => {
        expect(/.*animal.*dev/.exec(string)).toBeTruthy();
      });

      await getCategories();

      expect(spyLog).toHaveBeenCalled();
      spyLog.mockRestore();
    });
  });

  describe("#getChuckNorrisJoke", () => {
    afterAll(() => {
      request.default.mockReset();
    });

    it("Must print an error with 'console.error' when the API respond with error", async () => {
      expect.assertions(1);

      const spyLogError = jest.spyOn(console, "error").mockImplementation();
      request.default.mockImplementationOnce((...params) => {
        params[params.length - 1](new Error("This is a fake error"));
      });

      await getChuckNorrisJoke("dev");

      expect(spyLogError).toHaveBeenCalled();
      spyLogError.mockRestore();
    });

    it("Must not print anything with 'console.log' when an error is throwned", async () => {
      expect.assertions(3);

      request.default.mockImplementationOnce((...params) => {
        params[params.length - 1](new Error("This is a fake error"));
      });
      const spyLog = jest.spyOn(console, "log").mockImplementation();
      const spyLogError = jest.spyOn(console, "error").mockImplementation();

      await getChuckNorrisJoke("dev");

      expect(spyLog).not.toHaveBeenCalled();
      expect(spyLogError).toHaveBeenCalled();
      expect(request.default).toHaveBeenCalled();
      spyLog.mockRestore();
      spyLogError.mockRestore();
    });

    it("Must use '@fewlines-education/request' package to get a joke", async () => {
      expect.assertions(2);

      request.default.mockImplementationOnce(mockedJokeRequest);
      const spyLog = jest.spyOn(console, "log").mockImplementation();

      await getChuckNorrisJoke("dev");

      expect(request.default).toHaveBeenCalled();
      expect(request.default.mock.calls[0][0]).toBe("https://api.chucknorris.io/jokes/random?category=dev");
      spyLog.mockRestore();
    });

    it("Must use the category parameter in the API url", async () => {
      expect.assertions(4);

      request.default.mockImplementationOnce(mockedJokeRequest);
      const spyLog = jest.spyOn(console, "log").mockImplementation();

      await getChuckNorrisJoke("dev");

      expect(request.default).toHaveBeenCalled();
      expect(request.default.mock.calls[0][0]).toBe("https://api.chucknorris.io/jokes/random?category=dev");

      request.default.mockClear();

      request.default.mockImplementationOnce(mockedJokeRequest);

      await getChuckNorrisJoke("cat");

      expect(request.default).toHaveBeenCalled();
      expect(request.default.mock.calls[0][0]).toBe("https://api.chucknorris.io/jokes/random?category=cat");
      spyLog.mockRestore();
    });

    it("Must print a joke with 'console.log'", async () => {
      expect.assertions(2);

      request.default.mockImplementationOnce(mockedJokeRequest);
      const spy = jest.spyOn(console, "log").mockImplementation((log) => {
        expect(log).toEqual(mockedJoke);
      });

      await getChuckNorrisJoke("dev");

      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });
  });
});
