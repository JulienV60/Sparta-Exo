import { column } from "../src/column";

it("Should return columns", () => {
  expect.assertions(3);

  expect(column(2, "*")).toBe("*\n*\n");
  expect(column(5, "x")).toBe("x\nx\nx\nx\nx\n");
  expect(column(0, "*")).toBe("");
});
