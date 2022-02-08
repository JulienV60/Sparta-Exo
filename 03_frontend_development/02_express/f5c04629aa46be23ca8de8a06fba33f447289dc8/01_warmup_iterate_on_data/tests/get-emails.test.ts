import { resolve } from "path";
import { readCode, findNode, expectMessage } from "camp2-helpers";
import { getEmails } from "../src/index";

let studentCode: any;
beforeAll(async () => {
  // Loads the student's code
  studentCode = await readCode(resolve(__dirname, "../src/index.ts"));
});

describe("#CustomerType type alias", () => {
  test("your code must not includes 'any' or 'unknown' types", () => {
    expect.assertions(1);

    const usingAnyType = studentCode.includes("any");
    const usingUnknownType = studentCode.includes("unknown");

    expectMessage(
      usingAnyType || usingUnknownType,
      "Smart move to use an 'any' or 'unknown' type, but you must not use it, ever!",
      "warning",
    ).toEqual(false);
  });

  test("CustomerType should be declared as a type alias", () => {
    expect.assertions(1);

    let typeAliasDeclarationCheck;

    try {
      typeAliasDeclarationCheck = (findNode(studentCode, "CustomerType") as any).type;
    } catch (error) {
      console.log(error);
    }

    expect(typeAliasDeclarationCheck).toEqual("TSTypeAliasDeclaration");
  });

  test("CustomerType should have five properties", () => {
    expect.assertions(1);

    let typeMembers;

    try {
      typeMembers = (findNode(studentCode, "CustomerType") as any).typeAnnotation.members;
    } catch (error) {
      console.error(error);
    }

    expect(typeMembers.length).toEqual(5);
  });

  test("'id' key type should be as expected", () => {
    expect.assertions(2);

    let idKeyName;
    let idKeyType;

    try {
      const customerType = (findNode(studentCode, "CustomerType") as any).typeAnnotation.members[0];
      idKeyName = customerType.key.name;
      idKeyType = customerType.typeAnnotation.typeAnnotation.type;
    } catch (error) {
      console.error(error);
    }

    expect(idKeyName).toEqual("id");
    expect(idKeyType).toEqual("TSNumberKeyword");
  });

  test("'first_name' key type should be as expected", () => {
    expect.assertions(2);

    let firstNameKeyName;
    let firstNameKeyType;

    try {
      const customerType = findNode(studentCode, "CustomerType") as any;
      firstNameKeyName = customerType.typeAnnotation.members[1].key.name;
      firstNameKeyType = customerType.typeAnnotation.members[1].typeAnnotation.typeAnnotation.type;
    } catch (error) {
      console.error(error);
    }

    expect(firstNameKeyName).toEqual("first_name");
    expect(firstNameKeyType).toEqual("TSStringKeyword");
  });

  test("'last_name' key type should be as expected", () => {
    expect.assertions(2);

    let lastNameKeyName;
    let lastNameKeyType;

    try {
      const customerType = findNode(studentCode, "CustomerType") as any;
      lastNameKeyName = customerType.typeAnnotation.members[2].key.name;
      lastNameKeyType = customerType.typeAnnotation.members[2].typeAnnotation.typeAnnotation.type;
    } catch (error) {
      console.error(error);
    }

    expect(lastNameKeyName).toEqual("last_name");
    expect(lastNameKeyType).toEqual("TSStringKeyword");
  });

  test("'email' key type should be as expected", () => {
    expect.assertions(2);

    let emailKeyName;
    let emailKeyType;

    try {
      const customerType = findNode(studentCode, "CustomerType") as any;
      emailKeyName = customerType.typeAnnotation.members[3].key.name;
      emailKeyType = customerType.typeAnnotation.members[3].typeAnnotation.typeAnnotation.type;
    } catch (error) {
      console.error(error);
    }

    expect(emailKeyName).toEqual("email");
    expect(emailKeyType).toEqual("TSStringKeyword");
  });

  test("'gender' key type should be as expected", () => {
    expect.assertions(2);

    let genderKeyName;
    let genderKeyType;

    try {
      const customerType = findNode(studentCode, "CustomerType") as any;
      genderKeyName = customerType.typeAnnotation.members[4].key.name;
      genderKeyType = customerType.typeAnnotation.members[4].typeAnnotation.typeAnnotation.type;
    } catch (error) {
      console.error(error);
    }

    expect(genderKeyName).toEqual("gender");
    expect(genderKeyType).toEqual("TSStringKeyword");
  });
});

describe("#getEmails function", () => {
  test("it should be a function", () => {
    expect.assertions(1);

    expect(typeof getEmails).toEqual("function");
  });

  test("it should return 'email' values of an array", () => {
    expect.assertions(1);

    const CustomerType = [
      { id: 1, first_name: "Filberto", last_name: "Mowles", email: "fmowles3@msu.local", gender: "Female" },
      { id: 2, first_name: "Ania", last_name: "Mabley", email: "amabley4@arizona.local", gender: "Male" },
      { id: 3, first_name: "Nefen", last_name: "Fernandez", email: "nfernandez5@aboutads.local", gender: "Female" },
      { id: 4, first_name: "Nikolos", last_name: "Bonanno", email: "nbonanno6@netlog.local", gender: "Non-binary" },
    ];

    const expectedResults = [
      "fmowles3@msu.local",
      "amabley4@arizona.local",
      "nfernandez5@aboutads.local",
      "nbonanno6@netlog.local",
    ];

    const results = getEmails(CustomerType);

    expect(results).toEqual(expectedResults);
  });
});
