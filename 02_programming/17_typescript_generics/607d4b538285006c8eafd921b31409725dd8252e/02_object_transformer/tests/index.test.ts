import { resolve } from "path";
import { readCode, findNode, expectMessage } from "camp2-helpers";
import { productTransformer } from "../src/index";

let studentCode: any;
beforeAll(async () => {
  // Loads the student's code
  studentCode = await readCode(resolve(__dirname, "../src/index.ts"));
  return studentCode;
});

describe("#Product", () => {
  test("Product should be declared as a type alias", () => {
    let typeAliasDeclarationCheck;

    try {
      typeAliasDeclarationCheck = (findNode(studentCode, "Product") as any).type;
    } catch (error) {
      console.log("It's not the type we want, look at the README again");
    }

    expect(typeAliasDeclarationCheck).toBe("TSTypeAliasDeclaration");
  });

  test("Product should contain the required types", () => {
    let ReceivedProductTypeCheckArray: string[];

    try {
      ReceivedProductTypeCheckArray = (findNode(studentCode, "Product") as any).typeAnnotation.members.map((member: any) => member.key.name);
    } catch (error) {
      console.log("It's not the type we want, look at the README again");
    }

    let doesMyTypeContainWhatIWant = ReceivedProductTypeCheckArray.includes("productName") && ReceivedProductTypeCheckArray.includes("quantity");


    expect(doesMyTypeContainWhatIWant).toBe(true)
  });
})

describe("#productTransformer", () => {
  test("productTransformer should return the right value", () => {
    const testObject = {
      productName: "Louis",
      quantity: 30,
    }

    const newArray1 = productTransformer(testObject);
    const expectedArrayValue1 = [["productName", "Louis"], ["quantity", 30]];

    const testObject2 = {
      productName: "Lou",
      quantity: 3,
    }

    const newArray2 = productTransformer(testObject2);
    const expectedArrayValue2 = [["productName", "Lou"], ["quantity", 3]];


    expect(newArray1).toEqual(expectedArrayValue1);
    expect(newArray2).toEqual(expectedArrayValue2);
  })

  test("ReceivedProduct parameter should be typed as expected", () => {
    let receivedObjectParameterType;
    try {
      receivedObjectParameterType = (findNode(studentCode, "productTransformer") as any).params[0].typeAnnotation.typeAnnotation.typeName.name;
    } catch (error) {
      console.log("It's not the type we want, look at the README again");
    }

    expect(receivedObjectParameterType).toBe("Product");
  });

  test("function's return should be typed as expected", () => {
    let functionReturnElementTypes;
    let functionReturnTuppleTypes;

    try {
      functionReturnElementTypes = (findNode(studentCode, "productTransformer") as any).returnType.typeAnnotation.elementType.elementTypes.map((elementType: any) => elementType.type);
      functionReturnTuppleTypes = (findNode(studentCode, "productTransformer") as any).returnType.typeAnnotation.elementType.elementTypes[1].types.map((type: any) => type.type);
    } catch (error) {
      console.log("It's not the type we want, look at the README again");
    }

    const hasMyTypesInElements = functionReturnElementTypes.includes("TSStringKeyword") && functionReturnElementTypes.includes("TSUnionType")
    const hasMyTypesInTupple = functionReturnTuppleTypes.includes("TSStringKeyword") && functionReturnTuppleTypes.includes("TSNumberKeyword")


    expect(hasMyTypesInElements).toBe(true);
    expect(hasMyTypesInTupple).toBe(true);
  });
})
