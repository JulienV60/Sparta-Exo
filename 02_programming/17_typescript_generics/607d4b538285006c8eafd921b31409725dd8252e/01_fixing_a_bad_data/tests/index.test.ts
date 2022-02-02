import { resolve } from "path";
import { readCode, findNode, expectMessage } from "camp2-helpers";
import { transformObject } from "../src/index";

let studentCode: any;
beforeAll(async () => {
  // Loads the student's code
  studentCode = await readCode(resolve(__dirname, "../src/index.ts"));
  return studentCode;
});

describe("#ReceivedObject", () => {
  test("ReceivedObject should be declared as a type alias", () => {
    let typeAliasDeclarationCheck;

    try {
      typeAliasDeclarationCheck = (findNode(studentCode, "ReceivedObject") as any).type;
    } catch (error) {
      console.log("It's not the type we want, look at the README again");
    }

    expect(typeAliasDeclarationCheck).toBe("TSTypeAliasDeclaration");
  });

  test("ReceivedObject should contain the required types", () => {
    let ReceivedObjectTypeCheckArray: string[];

    try {
      ReceivedObjectTypeCheckArray = (findNode(studentCode, "ReceivedObject") as any).typeAnnotation.members.map((member: any) => member.key.name);
    } catch (error) {
      console.log("It's not the type we want, look at the README again");
    }

    let doesMyTypeContainWhatIWant = ReceivedObjectTypeCheckArray.includes("a") && ReceivedObjectTypeCheckArray.includes("b");


    expect(doesMyTypeContainWhatIWant).toBe(true)
  });
})

describe("#transformObject", () => {
  test("transformObject should return the right value", () => {
    const testObject = {
      a: "Louis",
      b: 30,
    }

    const newArray1 = transformObject(testObject);
    const expectedArrayValue1 = ["Louis", 30];

    const testObject2 = {
      a: "Lou",
      b: 3,
    }

    const newArray2 = transformObject(testObject2);
    const expectedArrayValue2 = ["Lou", 3];


    expect(newArray1).toEqual(expectedArrayValue1);
    expect(newArray2).toEqual(expectedArrayValue2);
  })

  test("receivedObject parameter should be typed as expected", () => {
    let receivedObjectParameterType;
    try {
      receivedObjectParameterType = (findNode(studentCode, "transformObject") as any).params[0].typeAnnotation.typeAnnotation.typeName.name;
    } catch (error) {
      console.log("It's not the type we want, look at the README again");
    }

    expect(receivedObjectParameterType).toBe("ReceivedObject");
  });

  test("function's return should be typed as expected", () => {
    let functionReturnTypes;

    try {
      functionReturnTypes = (findNode(studentCode, "transformObject") as any).returnType.typeAnnotation.elementType.typeAnnotation.types.map((type: any) => type.type);
    } catch (e) {
      console.log("It's not the type we want, look at the README again");
    }

    const hasMyTypes = functionReturnTypes.includes("TSStringKeyword") && functionReturnTypes.includes("TSNumberKeyword")

    expect(hasMyTypes).toBe(true);
  });
})
