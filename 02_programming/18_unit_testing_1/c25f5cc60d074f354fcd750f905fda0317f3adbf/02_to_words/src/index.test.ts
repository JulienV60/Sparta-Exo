import { toWords } from "./index";

describe("index", () => {
  test("Sentence Split", () => {
    expect.assertions(1);
    expect(toWords("hello,")).toStrictEqual(["hello"]);
  });
});
