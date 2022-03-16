const { readCode, expectMessage } = require("camp2-helpers");
const { recursiveBouncer, arrayCrusher } = require("../src/arraysDestructureSpread");

describe("Destructuring and spread with Arrays", () => {
  describe("#arrayCrusher", () => {
    test("Should concatenate two array in one", () => {
      const crushedArray1 = arrayCrusher([1], [2]);
      const crushedArray2 = arrayCrusher([1, 2], [3, 4]);

      expect(crushedArray1).toEqual([1, 2]);
      expect(crushedArray2).toEqual([1, 2, 3, 4]);
    });

    test("Should use array destructuring", async () => {
      expect.assertions(1);
      const code = await readCode("./src/arraysDestructureSpread.js");
      const match = code.match(/arrayCrusher\(\w*\, \w*\) {(?<body>.*)^}$.*function/ms);

      if (match && match.groups && match.groups.body) {
        expectMessage(match.groups.body, "Use array destructuring method '...'", "log").toMatch(
          /\[\.{3}\w*,\s?\.{3}\w*\];/,
        );
      }
    });
  });

  describe("#recursiveBouncer", () => {
    let fakeLog;

    beforeEach(() => {
      fakeLog = jest.spyOn(console, "log").mockImplementation(() => {});
    });

    afterEach(() => {
      fakeLog.mockRestore();
    });

    test("Should print each element of the array once with 'console.log'", () => {
      [
        [1, 2, 3],
        ["Hello", "World"],
        ["a", "b", "c"],
      ].forEach((a) => {
        fakeLog = jest.spyOn(console, "log").mockImplementation(() => {});
        recursiveBouncer(a);
        expect(a).toEqual(fakeLog.mock.calls.flat());
        expect(fakeLog).toHaveBeenCalledTimes(a.length);
        fakeLog.mockRestore();
      });
    });

    test("Should use array destructuring", async () => {
      expect.assertions(1);
      const code = await readCode("./src/arraysDestructureSpread.js");

      const match = code.match(/recursiveBouncer\(\w*\) {(?<body>.*)^}$/ms);
      if (match && match.groups && match.groups.body) {
        expectMessage(match.groups.body, "Use array destructuring method '...'", "log").toMatch(
          /\[\w*, \.{3}\w*\] = \w*/,
        );
      }
    });

    test("Should use recursion", async () => {
      expect.assertions(4);
      const code = await readCode("./src/arraysDestructureSpread.js");
      const match = code.match(/recursiveBouncer\(\w*\) {(?<body>.*)^}$/ms);
      if (match && match.groups && match.groups.body) {
        expect(match.groups.body).not.toMatch("for");
        expect(match.groups.body).not.toMatch("while");
        expect(match.groups.body).not.toMatch("forEach");
        expect(match.groups.body).toMatch("recursiveBouncer");
      }
    });
  });
});
