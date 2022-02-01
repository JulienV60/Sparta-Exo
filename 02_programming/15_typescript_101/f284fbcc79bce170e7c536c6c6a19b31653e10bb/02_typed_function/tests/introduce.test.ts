import { resolve } from "path";
import { readCode, findNode, expectMessage } from "camp2-helpers";

let studentCode: any;
beforeAll(async () => {
  // Loads the student's code
  studentCode = await readCode(resolve(__dirname, "../src/index.ts"));
  return studentCode;
});

describe("#introduce", () => {
  test("your code must not includes 'any' or 'unknown' types", () => {
    const usingAnyType = studentCode.includes("any");
    const usingUnknownType = studentCode.includes("unknown");

    expectMessage(
      usingAnyType || usingUnknownType,
      "Smart move to use an 'any' or 'unknown' type, but you must not use it, ever!",
      "warning",
    ).toEqual(false);
  });

  test("name parameter should be typed as expected", () => {
    let nameParameterType;

    try {
      nameParameterType = (findNode(studentCode, "introduce") as any).params[0].typeAnnotation.typeAnnotation.type;
    } catch (error) {
      console.log(error);
    }

    expect(nameParameterType).toBe("TSStringKeyword");
  });

  test("age parameter should be typed as expected", () => {
    let ageParameterType;

    try {
      ageParameterType = (findNode(studentCode, "introduce") as any).params[1].typeAnnotation.typeAnnotation.type;
    } catch (error) {
      console.log(error);
    }

    expect(ageParameterType).toBe("TSNumberKeyword");
  });

  test("function's return should be typed as expected", () => {
    let functionReturnType;

    try {
      functionReturnType = (findNode(studentCode, "introduce") as any).returnType.typeAnnotation.type;
    } catch (error) {
      console.log(error);
    }

    expect(functionReturnType).toBe("TSVoidKeyword");
  });
});
