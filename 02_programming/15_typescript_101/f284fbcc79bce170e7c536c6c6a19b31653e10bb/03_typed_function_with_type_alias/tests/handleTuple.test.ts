// @ts-nocheck
import { resolve } from "path";
import { readCode, findNode, expectMessage } from "camp2-helpers";
import { handleTuple } from "../src/index";

let studentCode: any;
beforeAll(async () => {
  // Loads the student's code
  studentCode = await readCode(resolve(__dirname, "../src/index.ts"));
  return studentCode;
});

describe("#handleTuple", () => {
  test("your code must not includes 'any' or 'unknown' types", () => {
    const usingAnyType = studentCode.includes("any");
    const usingUnknownType = studentCode.includes("unknown");

    expectMessage(
      usingAnyType || usingUnknownType,
      "Smart move to use an 'any' or 'unknown' type, but you must not use it, ever!",
      "warning",
    ).toEqual(false);
  });

  test("shouldn't use console.log if not provided with a tuple", () => {
    const spy = jest.spyOn(console, "log").mockImplementation(() => {});
    handleTuple([[], {}]);
    handleTuple([true, () => {}]);
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  test("two console.log with correct values and types", () => {
    let logs = "";
    const spy = jest.spyOn(console, "log").mockImplementation((text) => {
      logs += text;
    });
    handleTuple(["foo", 1]);

    expect(logs).toMatch(/foo.*string/);
    expect(logs).toMatch(/1.*number/);
    expect(spy).toHaveBeenCalledTimes(2);
    spy.mockRestore();
  });

  test("the value of the first item at the start of the string", () => {
    const spy = jest.spyOn(console, "log").mockImplementation(() => {});
    handleTuple(["foo", 1]);
    expect(spy.mock.calls[0][0]).toEqual(expect.stringMatching(/^foo(.*?)/));
    spy.mockRestore();
  });

  test("the value of the second item at the start of the string", () => {
    const spy = jest.spyOn(console, "log").mockImplementation(() => {});
    handleTuple(["foo", 1]);
    expect(spy.mock.calls[1][0]).toEqual(expect.stringMatching(/^1(.*?)/));
    spy.mockRestore();
  });

  test("its return should be typed as intended", () => {
    let functionReturnType;

    try {
      functionReturnType = (findNode(studentCode, "handleTuple") as any).returnType.typeAnnotation.type;
    } catch (error) {
      console.log(error);
    }

    expect(functionReturnType).toBe("TSVoidKeyword");
  });
});

describe("#MyTuple", () => {
  test("it should be declared as a type alias", () => {
    let typeAliasDeclarationCheck;

    try {
      typeAliasDeclarationCheck = (findNode(studentCode, "MyTuple") as any).type;
    } catch (error) {
      console.log(error);
    }

    expect(typeAliasDeclarationCheck).toBe("TSTypeAliasDeclaration");
  });

  test("its type alias should be correct", () => {
    let typeAliasDeclarationCheck;

    try {
      typeAliasDeclarationCheck = (findNode(studentCode, "MyTuple") as any).typeAnnotation.type;
    } catch (error) {
      console.log(error);
    }

    expect(typeAliasDeclarationCheck).toBe("TSTupleType");
  });

  test("its type alias elements should be a tuple with a string and a number", () => {
    let tupleElementTypes;

    try {
      tupleElementTypes = (findNode(studentCode, "MyTuple") as any).typeAnnotation.elementTypes;
    } catch (error) {
      console.log(error);
    }

    expect(tupleElementTypes[0].type).toBe("TSStringKeyword");
    expect(tupleElementTypes[1].type).toBe("TSNumberKeyword");
  });

  test("it should be used as parameter type of handleTuple", () => {
    let tupleParameterName;

    try {
      tupleParameterName = (findNode(studentCode, "handleTuple") as any).params[0].typeAnnotation.typeAnnotation
        .typeName.name;
    } catch (error) {
      console.log(error);
    }

    expect(tupleParameterName).toBe("MyTuple");
  });
});
