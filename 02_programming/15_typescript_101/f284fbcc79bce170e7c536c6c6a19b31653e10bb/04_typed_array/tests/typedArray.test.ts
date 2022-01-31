import { resolve } from "path";
import { readCode, findNode, expectMessage } from "camp2-helpers";

let studentCode: any;
beforeAll(async () => {
  // Loads the student's code
  studentCode = await readCode(resolve(__dirname, "../src/index.ts"));
  return studentCode;
});

describe("#typing arrays", () => {
  test("your code must not includes 'any' or 'unknown' types", () => {
    const usingAnyType = studentCode.includes("any");
    const usingUnknownType = studentCode.includes("unknown");

    expectMessage(
      usingAnyType || usingUnknownType,
      "Smart move to use an 'any' or 'unknown' type, but you must not use it, ever!",
      "warning",
    ).toEqual(false);
  });

  describe("TeachersList", () => {
    test("it should be declared as a type alias", () => {
      let typeAliasDeclarationCheck;

      try {
        typeAliasDeclarationCheck = (findNode(studentCode, "TeachersList") as any).type;
      } catch (error) {
        console.log(error);
      }

      expect(typeAliasDeclarationCheck).toBe("TSTypeAliasDeclaration");
    });

    test("its type alias should be as excepted", () => {
      let typeAliasDeclarationCheck;

      try {
        typeAliasDeclarationCheck = (findNode(studentCode, "TeachersList") as any).typeAnnotation.type;
      } catch (error) {
        console.log(error);
      }

      expect(typeAliasDeclarationCheck).toBe("TSArrayType");
    });

    test("its type alias elements should be an array of strings", () => {
      let arrayElementTypes;

      try {
        arrayElementTypes = (findNode(studentCode, "TeachersList") as any).typeAnnotation.elementType;
      } catch (error) {
        console.log(error);
      }

      expect(arrayElementTypes.type).toBe("TSStringKeyword");
    });
  });

  describe("YarnTestResults", () => {
    test("it should be declared as a type alias", () => {
      let typeAliasDeclarationCheck;

      try {
        typeAliasDeclarationCheck = (findNode(studentCode, "YarnTestResults") as any).type;
      } catch (error) {
        console.log(error);
      }

      expect(typeAliasDeclarationCheck).toBe("TSTypeAliasDeclaration");
    });

    test("its type alias should be as excepted", () => {
      let typeAliasDeclarationCheck;

      try {
        typeAliasDeclarationCheck = (findNode(studentCode, "YarnTestResults") as any).typeAnnotation.type;
      } catch (error) {
        console.log(error);
      }

      expect(typeAliasDeclarationCheck).toBe("TSArrayType");
    });

    test("its type alias elements should be an array of booleans", () => {
      let arrayElementTypes;

      try {
        arrayElementTypes = (findNode(studentCode, "YarnTestResults") as any).typeAnnotation.elementType;
      } catch (error) {
        console.log(error);
      }

      expect(arrayElementTypes.type).toBe("TSBooleanKeyword");
    });
  });

  describe("ResultsBulletin", () => {
    test("it should be declared as a type alias", () => {
      let typeAliasDeclarationCheck;

      try {
        typeAliasDeclarationCheck = (findNode(studentCode, "ResultsBulletin") as any).type;
      } catch (error) {
        console.log(error);
      }

      expect(typeAliasDeclarationCheck).toBe("TSTypeAliasDeclaration");
    });

    test("its type alias should be as excepted", () => {
      let typeAliasDeclarationCheck;

      try {
        typeAliasDeclarationCheck = (findNode(studentCode, "ResultsBulletin") as any).typeAnnotation.type;
      } catch (error) {
        console.log(error);
      }

      expect(typeAliasDeclarationCheck).toBe("TSArrayType");
    });

    test("its type alias elements should be an array of either numbers or strings", () => {
      let arrayElementTypes;

      try {
        arrayElementTypes = (findNode(studentCode, "ResultsBulletin") as any).typeAnnotation.elementType;
      } catch (error) {
        console.log(error);
      }

      expect(arrayElementTypes.typeAnnotation.type).toBe("TSUnionType");
      expect(arrayElementTypes.typeAnnotation.types[0].type).toBe("TSNumberKeyword");
      expect(arrayElementTypes.typeAnnotation.types[1].type).toBe("TSStringKeyword");
    });
  });

  describe("PairsList", () => {
    test("it should be declared as a type alias", () => {
      let typeAliasDeclarationCheck;

      try {
        typeAliasDeclarationCheck = (findNode(studentCode, "PairsList") as any).type;
      } catch (error) {
        console.log(error);
      }

      expect(typeAliasDeclarationCheck).toBe("TSTypeAliasDeclaration");
    });

    test("its type alias should be as excepted", () => {
      let typeAliasDeclarationCheck;

      try {
        typeAliasDeclarationCheck = (findNode(studentCode, "PairsList") as any).typeAnnotation.type;
      } catch (error) {
        console.log(error);
      }

      expect(typeAliasDeclarationCheck).toBe("TSArrayType");
    });

    test("its type alias elements should be an array of strings' arrays", () => {
      let arrayElementTypes;

      try {
        arrayElementTypes = (findNode(studentCode, "PairsList") as any).typeAnnotation.elementType;
      } catch (error) {
        console.log(error);
      }

      expect(arrayElementTypes.type).toBe("TSArrayType");
      expect(arrayElementTypes.elementType.type).toBe("TSStringKeyword");
    });
  });
});
