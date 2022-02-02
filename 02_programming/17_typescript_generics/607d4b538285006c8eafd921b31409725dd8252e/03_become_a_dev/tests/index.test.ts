import { resolve } from "path";
import { readCode, findNode, expectMessage } from "camp2-helpers";
import { becomeADev } from "../src/index";

let studentCode: any;
beforeAll(async () => {
  // Loads the student's code
  studentCode = await readCode(resolve(__dirname, "../src/index.ts"));
  return studentCode;
});

describe("#types", () => {
  test("Human should be declared as a type alias", () => {
    let typeAliasDeclarationCheck;

    try {
      typeAliasDeclarationCheck = (findNode(studentCode, "Human") as any).type;
    } catch (error) {
      console.log("It's not the type we want, look at the README again");
    }

    expect(typeAliasDeclarationCheck).toBe("TSTypeAliasDeclaration");
  });

  test("Human should contain the required types", () => {
    let humanTypeCheckArray: string[];

    try {
      humanTypeCheckArray = (findNode(studentCode, "Human") as any).typeAnnotation.members.map((member: any) => member.key.name);
    } catch (error) {
      console.log("It's not the type we want, look at the README again");
    }

    let doesMyTypeContainWhatIWant = humanTypeCheckArray.includes("name") && humanTypeCheckArray.includes("age") && humanTypeCheckArray.includes("knowsDev");


    expect(doesMyTypeContainWhatIWant).toBe(true)
  });

  test("Dev should be declared as a type alias", () => {
    let typeAliasDeclarationCheck;

    try {
      typeAliasDeclarationCheck = (findNode(studentCode, "Dev") as any).type;
    } catch (error) {
      console.log("It's not the type we want, look at the README again");
    }

    expect(typeAliasDeclarationCheck).toBe("TSTypeAliasDeclaration");
  });

  test("Dev should contain the required types and use an intersection type", () => {
    let devTypeCheckArray: string[];
    let devTypeCheckTypeReference: string;

    try {
      devTypeCheckArray = (findNode(studentCode, "Dev") as any).typeAnnotation.types[1].members.map((member: any) => member.key.name);
      devTypeCheckTypeReference = (findNode(studentCode, "Dev") as any).typeAnnotation.types[0].typeName.name;
    } catch (error) {
      console.log("It's not the type we want, look at the README again");
    }


    expect(devTypeCheckArray.includes("knownLanguage")).toBe(true);
    expect(devTypeCheckTypeReference).toBe("Human")
  });
})

describe("#becomeADev", () => {
  test("becomeADev should return the right value", () => {
    const testHuman1 = {
      name: "Louis",
      age: 30,
      knowsDev: false,
    }

    const newDev1 = becomeADev(testHuman1);
    const expectedDevValue1 = {
      name: "Louis",
      age: 30,
      knowsDev: true,
      knownLanguage: "JavaScript",
    };

    const testHuman2 = {
      name: "Lou",
      age: 3,
      knowsDev: false,
    }

    const newDev2 = becomeADev(testHuman2);
    const expectedDevValue2 = {
      name: "Lou",
      age: 3,
      knowsDev: true,
      knownLanguage: "JavaScript",
    };


    expect(newDev1).toEqual(expectedDevValue1);
    expect(newDev2).toEqual(expectedDevValue2);
  })

  test("human parameter should be typed as expected", () => {
    let humanParameterType;
    try {
      humanParameterType = (findNode(studentCode, "becomeADev") as any).params[0].typeAnnotation.typeAnnotation.typeName.name;
    } catch (error) {
      console.log("It's not the type we want, look at the README again");
    }

    expect(humanParameterType).toBe("Human");
  });

  test("function's return should be typed as expected", () => {
    let functionReturnType;

    try {
      functionReturnType = (findNode(studentCode, "becomeADev") as any).returnType.typeAnnotation.typeName.name;
    } catch (error) {
      console.log("It's not the type we want, look at the README again");
    }

    expect(functionReturnType).toBe("Dev");
  });
})
