const helpers = require("camp2-helpers");
const { developer, bug, code } = require("../src/index");

let studentCode;

beforeAll(async () => {
  // Loads the student's code
  studentCode = await helpers.readCode("./src/index.js");
  return studentCode;
});

describe("Destructuring and spread with arrays and objects", () => {
  describe("Becoming a developer", () => {
    test("Should return an Object", () => {
      expect(developer).not.toBe(null);
      expect(typeof developer).toBe("object");
    });

    test("Should have the values needed to be a developer", () => {
      const groundTruth = {
        hasComputer: true,
        knowsJavascript: true,
        knowsTypescript: true,
        knowsReact: true,
        knowsNext: true,
        knowsMongoDB: true,
        timeSpent: "10 weeks",
      };
      expect(developer).toEqual(groundTruth);
    });

    test("Should use the spread operator", () => {
      const studentRegex = /(\.\.\.\w*student\w*)/g;
      const knowledgeRegex = /(\.\.\.\w*knowledge\w*)/g;

      helpers
        .expectMessage(studentCode.match(studentRegex), `You need to use the spread operator`, "warning")
        .not.toBe(null);
      helpers
        .expectMessage(studentCode.match(knowledgeRegex), `You need to use the spread operator`, "warning")
        .not.toBe(null);
    });
  });

  describe("Debugging the application", () => {
    test("Should seperate the bug from the application", () => {
      expect(bug).toBe("bug");
    });

    test("Should keep the code in an Array", () => {
      const testArray = new Array(8).fill("code");
      expect(Array.isArray(code)).toBe(true);
      expect(code).toEqual(testArray);
    });

    test("Should use the destructuring", () => {
      const regex = /(\.\.\.\w+\s*\])/g;

      helpers.expectMessage(studentCode.match(regex), `You need to use the destructuring`, "warning").not.toBe(null);
    });
  });
});
