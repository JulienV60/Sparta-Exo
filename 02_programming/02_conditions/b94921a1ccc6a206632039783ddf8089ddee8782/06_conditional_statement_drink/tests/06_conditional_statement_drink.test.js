const path = require("path");
const readcode = require("./readcode");

let studentCode;
beforeAll(() => {
  studentCode = readcode(
    path.resolve(__dirname, "../src/index.js")
  );
  return studentCode;
});

describe("#05_conditional_statement_drink", () => {
  test("Frieda should be set with the good name and age", () => {
    return studentCode.then((code) => {
      const frieda = eval(code + "; frieda;");

      expect(frieda.age).toBe(22);
      expect(frieda.name).toBe("Frieda");
    });
  });

  test("Francis should be set with the good name and age", () => {
    return studentCode.then((code) => {
      const francis = eval(code + "; francis;");

      expect(francis.age).toBe(17);
      expect(francis.name).toBe("Francis");
    });
  });

  describe("Frieda and alcohol", () => {
    test("Frieda should be able to drink alcohol", () => {
      return studentCode.then((code) => {
        const canFriedaDrinkAlcohol = eval(code + "; canFriedaDrinkAlcohol;");

        expect(canFriedaDrinkAlcohol).toBe(true);
      });
    });

    test("Frieda should not be able to drink alcohol if we change her age", () => {
      return studentCode.then((code) => {
        const changedStudentCode = code.replace(
          new RegExp(/(let|const) canFriedaDrinkAlcohol/m),
          "frieda.age = 15; $&"
        );
        const canFriedaDrinkAlcohol = eval(
          changedStudentCode + "; canFriedaDrinkAlcohol;"
        );

        expect(canFriedaDrinkAlcohol).toBe(false);
      });
    });
  });

  describe("Francis and alcohol", () => {
    test("Francis should not be able to drink alcohol", () => {
      return studentCode.then((code) => {
        const canFrancisDrinkAlcohol = eval(code + "; canFrancisDrinkAlcohol;");

        expect(canFrancisDrinkAlcohol).toBe(false);
      });
    });

    test("Francis should be able to drink alcohol if we change his age", () => {
      return studentCode.then((code) => {
        const changedStudentCode = code.replace(
          new RegExp(/(let|const) canFrancisDrinkAlcohol/m),
          "francis.age = 22; $&"
        );
        const canFrancisDrinkAlcohol = eval(
          changedStudentCode + "; canFrancisDrinkAlcohol;"
        );

        expect(canFrancisDrinkAlcohol).toBe(true);
      });
    });
  });
});
