import { resolve } from "path";
import { readCode, findNode, expectMessage } from "camp2-helpers";
import { hello, foo, bar, sumResult, digits, isOpen, empty } from "../src/index";

let studentCode: any;
beforeAll(async () => {
  // Loads the student's code
  studentCode = await readCode(resolve(__dirname, "../src/index.ts"));
});

describe("#constants values", () => {
  test("your code must not includes 'any' or 'unknown' types", () => {
    const usingAnyType = studentCode.includes("any");
    const usingUnknownType = studentCode.includes("unknown");

    expectMessage(
      usingAnyType || usingUnknownType,
      "Smart move to use an 'any' or 'unknown' type, but you must not use it, ever!",
      "warning",
    ).toEqual(false);
  });

  test("hello should have a value of Sparta and its expected type", () => {
    expect(hello).toBe("Sparta");

    let typeHello = null;

    try {
      typeHello = (findNode(studentCode, "hello") as any).declarations[0].id.typeAnnotation.typeAnnotation.type;
    } catch (error) {
      console.log(error);
    }

    expect(typeHello).toBe("TSStringKeyword");
  });

  test("foo should have a value of 12 and its expected type", () => {
    expect(foo).toBe(12);

    let typeFoo = null;

    try {
      typeFoo = (findNode(studentCode, "foo") as any).declarations[0].id.typeAnnotation.typeAnnotation.type;
    } catch (error) {
      console.log(error);
    }

    expect(typeFoo).toBe("TSNumberKeyword");
  });

  test("bar should have a value of 8 and its expected type", () => {
    expect(bar).toBe(8);

    let typeBar = null;

    try {
      typeBar = (findNode(studentCode, "bar") as any).declarations[0].id.typeAnnotation.typeAnnotation.type;
    } catch (error) {
      console.log(error);
    }

    expect(typeBar).toBe("TSNumberKeyword");
  });

  test("sumResult should have a value of foo + bar and its expected type", () => {
    expect(sumResult).toBe(foo + bar);

    let typeSumResult = null;

    try {
      typeSumResult = (findNode(studentCode, "sumResult") as any).declarations[0].id.typeAnnotation.typeAnnotation.type;
    } catch (error) {
      console.log(error);
    }

    expect(typeSumResult).toBe("TSNumberKeyword");
  });

  test("digits should have a value of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] and its expected type", () => {
    expect(digits).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    expect(
      /const\s*digits:\s*number\[\]\s*=/.test(studentCode) || /const\s*digits:\s*Array<number>\s*=/.test(studentCode),
    ).toEqual(true);
  });

  test("isOpen should have a value of false and its expected type", () => {
    expect(isOpen).toBe(false);

    let typeIsOpen = null;

    try {
      typeIsOpen = (findNode(studentCode, "isOpen") as any).declarations[0].id.typeAnnotation.typeAnnotation.type;
    } catch (error) {
      console.log(error);
    }

    expect(typeIsOpen).toBe("TSBooleanKeyword");
  });

  test("empty should have a value of null and its expected type", () => {
    expect(empty).toBe(null);

    let typeEmpty = null;

    try {
      typeEmpty = (findNode(studentCode, "empty") as any).declarations[0].id.typeAnnotation.typeAnnotation.type;
    } catch (error) {
      console.log(error);
    }

    expect(typeEmpty).toBe("TSNullKeyword");
  });
});
