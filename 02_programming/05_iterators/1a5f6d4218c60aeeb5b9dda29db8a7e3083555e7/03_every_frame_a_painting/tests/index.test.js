const canTakeArtPieces = require("../src/index");

test("Return true when every piece is a painting", () => {
  expect.assertions(1);

  expect(canTakeArtPieces([
    {piece: "Mona Lisa", type: "painting"},
    {piece: "Guernica", type: "painting"},
    {piece: "Girl with a Pearl Earring", type: "painting"},
  ])).toBe(true);
});

test("Return false when one piece is not a painting", () => {
  expect.assertions(1);

  expect(canTakeArtPieces([
    {piece: "Mona Lisa", type: "painting"},
    {piece: "The Thinker", type: "statue"},
    {piece: "Guernica", type: "painting"},
    {piece: "Girl with a Pearl Earring", type: "painting"},
  ])).toBe(false);
});


test("Return false when every pieces are not paintings", () => {
  expect.assertions(1);

  expect(canTakeArtPieces([
    {piece: "Statue of LIberty", type: "statue"},
    {piece: "The Thinker", type: "statue"},
    {piece: "Eiffel Tower", type: "building"},
  ])).toBe(false);
});
