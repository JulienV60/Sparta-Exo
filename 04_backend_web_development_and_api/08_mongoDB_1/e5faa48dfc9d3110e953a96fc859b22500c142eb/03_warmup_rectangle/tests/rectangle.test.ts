import {rectangle} from "../src/rectangle"

it("Should work with squares", () => {
  expect.assertions(1);

  const result = rectangle(3, 3).trim();
  const expected =
`***
***
***`;

  expect(result).toBe(expected)
})

it("Should work with rectangles", () => {
  expect.assertions(1);

  const result = rectangle(5, 3).trim();
  const expected =
`*****
*****
*****`;

  expect(result).toBe(expected)
})
