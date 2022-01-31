import { resolve } from "path";
import { readCode, findNode, expectMessage } from "camp2-helpers";

let studentCode: any;
beforeAll(async () => {
  // Loads the student's code
  studentCode = await readCode(resolve(__dirname, "../src/index.ts"));
  return studentCode;
});

describe("#typing objects", () => {
  test("your code must not includes 'any' or 'unknown' types", () => {
    const usingAnyType = studentCode.includes("any");
    const usingUnknownType = studentCode.includes("unknown");

    expectMessage(
      usingAnyType || usingUnknownType,
      "Smart move to use an 'any' or 'unknown' type, but you must not use it, ever!",
      "warning",
    ).toEqual(false);
  });

  test("it should be declare as a type alias", () => {
    let typeAliasDeclarationCheck;

    try {
      typeAliasDeclarationCheck = (findNode(studentCode, "CardType") as any).type;
    } catch (error) {
      console.log(error);
    }

    expect(typeAliasDeclarationCheck).toBe("TSTypeAliasDeclaration");
  });

  test("its type alias should be as expected", () => {
    let typeAliasDeclarationCheck;

    try {
      typeAliasDeclarationCheck = (findNode(studentCode, "CardType") as any).typeAnnotation;
    } catch (error) {
      console.log(error);
    }

    expect(typeAliasDeclarationCheck.type).toBe("TSTypeLiteral");
  });

  test("'name' key type should be as expected", () => {
    let nameKey;

    try {
      nameKey = (findNode(studentCode, "CardType") as any).typeAnnotation;
    } catch (error) {
      console.log(error);
    }

    expect(nameKey.members[0].key.name).toBe("name");
    expect(nameKey.members[0].typeAnnotation.typeAnnotation.type).toBe("TSStringKeyword");
  });

  test("'type' key type should be as expected", () => {
    let typeKey;

    try {
      typeKey = (findNode(studentCode, "CardType") as any).typeAnnotation;
    } catch (error) {
      console.log(error);
    }

    expect(typeKey.members[1].key.name).toBe("type");
    expect(typeKey.members[1].typeAnnotation.typeAnnotation.type).toBe("TSUnionType");
    expect(typeKey.members[1].typeAnnotation.typeAnnotation.types[0].type).toBe("TSStringKeyword");
    expect(typeKey.members[1].typeAnnotation.typeAnnotation.types[1].type).toBe("TSArrayType");
    expect(typeKey.members[1].typeAnnotation.typeAnnotation.types[1].elementType.type).toBe("TSStringKeyword");
  });

  test("'cost' key type should be as expected", () => {
    let costKey;

    try {
      costKey = (findNode(studentCode, "CardType") as any).typeAnnotation;
    } catch (error) {
      console.log(error);
    }

    expect(costKey.members[2].key.name).toBe("cost");
    expect(costKey.members[2].typeAnnotation.typeAnnotation.type).toBe("TSNumberKeyword");
  });

  test("'damage' key type should be as expected", () => {
    let damageKey;

    try {
      damageKey = (findNode(studentCode, "CardType") as any).typeAnnotation;
    } catch (error) {
      console.log(error);
    }

    expect(damageKey.members[3].key.name).toBe("damage");
    expect(damageKey.members[3].typeAnnotation.typeAnnotation.type).toBe("TSUnionType");
    expect(damageKey.members[3].typeAnnotation.typeAnnotation.types[0].type).toBe("TSNullKeyword");
    expect(damageKey.members[3].typeAnnotation.typeAnnotation.types[1].type).toBe("TSNumberKeyword");
  });

  test("'rare' key type should be as expected", () => {
    let rareKey;

    try {
      rareKey = (findNode(studentCode, "CardType") as any).typeAnnotation;
    } catch (error) {
      console.log(error);
    }

    expect(rareKey.members[4].key.name).toBe("rare");
    expect(rareKey.members[4].typeAnnotation.typeAnnotation.type).toBe("TSBooleanKeyword");
  });
});
