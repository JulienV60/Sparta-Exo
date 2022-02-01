import * as path from "path";
import * as helpers from "camp2-helpers";

import { Hero } from "../src/index";
import { findNode, Node, NODE_TYPE, NODE_KIND } from "./utils/astNodeParser";

describe("Hero class", () => {
  let heroClassNode: Node;

  beforeAll(async (done) => {
    const studentCode = await helpers.readCode(
      path.resolve(__dirname, "../src/index.ts")
    );

    heroClassNode = findNode(studentCode, "Hero");

    done();
  });

  class TestHero extends Hero {}

  const superman = new TestHero("superman");

  it("should be a class", () => {
    expect.assertions(2);

    expect(heroClassNode.type).toBe(NODE_TYPE.CLASS_DECLARATION);
    expect(superman instanceof Hero).toBe(true);
  });

  describe("class constructor:", () => {
    let constructorNode: Node;

    beforeAll(() => {
      constructorNode = findNode(heroClassNode, "constructor");
    });

    test("Hero should have a constructor", () => {
      expect.assertions(2);

      expect(constructorNode).not.toBe(undefined);
      expect(constructorNode.kind).toBe(NODE_KIND.CONSTRUCTOR);
    });

    it("The constructor should have only one parameter", () => {
      expect.assertions(1);

      const argumentsQuantity = constructorNode.params.length;

      expect(argumentsQuantity).toBe(1);
    });
  });

  describe("class properties:", () => {
    const testHero = new TestHero("Catwoman");

    it("should have a property called name.", () => {
      expect.assertions(2);

      const nameNode = findNode(heroClassNode, "name");

      expect(nameNode).not.toBe(undefined);
      expect(nameNode.type).toBe(NODE_TYPE.CLASS_PROPERTY);
    });
  });

  describe("sayHi:", () => {
    let sayHi: Node;

    beforeAll(() => {
      sayHi = findNode(heroClassNode, "sayHi");
    });

    it("should have a method called sayHi.", () => {
      expect.assertions(2);

      expect(sayHi).not.toBe(undefined);
      expect(sayHi.kind).toBe(NODE_KIND.METHOD);
    });

    test("the sayHi method should return a string using the hero's name", () => {
      const sayHiReturnType =  sayHi.returnType.typeAnnotation.type;

      expect(sayHiReturnType).toBe("TSStringKeyword");
    });
  });
});
