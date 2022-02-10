import {capitalize} from "../src/capitalize"

it("Should capitalize the first letter of 'voldemort'", () => {
  expect.assertions(1);

  const result = capitalize("voldemort").trim();

  expect(result).toBe("Voldemort")
})
