import { resolve } from "path";
import { readCode, findNode } from "camp2-helpers";

import { continents, cities } from "../src/data/data";
import { sanitizeUserInput } from "../src/utils/format";

describe("#data", () => {
  let studentCode: any;
  beforeAll(async () => {
    // Loads the student's code
    studentCode = await readCode(resolve(__dirname, "../src/data/data.ts"));
    return studentCode;
  });

  test("'continents' should be a tuple of six continents", () => {
    expect(continents.length).toEqual(6);

    let typeDeclarationCheck;

    try {
      typeDeclarationCheck = findNode(studentCode, "ContinentsArray") as any;
    } catch (error) {
      console.log(error);
    }

    expect(typeDeclarationCheck.typeAnnotation.type).toBe("TSTupleType");
  });

  test("'cities' should be an object", () => {
    let typeDeclarationCheck;

    try {
      typeDeclarationCheck = findNode(studentCode, "CitiesObject") as any;
    } catch (error) {
      console.log(error);
    }

    expect(typeDeclarationCheck.typeAnnotation.type).toBe("TSTypeLiteral");

    expect(cities instanceof Object).toEqual(true);

    cities.list = ["foo", "bar"];
    expect(cities.list[0]).toEqual("foo");
    expect(cities.list[1]).toEqual("bar");
  });
});

describe("#sanitizeUserInput", () => {
  test("should sentence case each word and join them", () => {
    expect(sanitizeUserInput("South America")).toEqual("SouthAmerica");
  });

  test("should remove string symbols and unnecessary spaces", () => {
    expect(sanitizeUserInput("_Europe/-.")).toEqual("Europe");
  });
});
