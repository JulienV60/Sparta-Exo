import { parseName } from "../src/parse-name";

it("Should be able to _split_ a name", () => {
  expect.assertions(1);

  const result = parseName("John McLane");

  expect(result).toEqual({ firstName: "John", lastName: "McLane" });
});
