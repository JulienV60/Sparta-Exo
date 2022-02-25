import { line } from "../src/line";

it("Should return lines", () => {
  expect.assertions(3);

  expect(line(2)).toBe("**");
  expect(line(5)).toBe("*****");
  expect(line(0)).toBe("");
});
