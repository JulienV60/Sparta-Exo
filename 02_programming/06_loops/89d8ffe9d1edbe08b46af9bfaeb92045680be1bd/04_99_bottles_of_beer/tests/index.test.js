const helpers = require("camp2-helpers");
const sing = require("../src/index");

let studentCode;
beforeAll(async () => {
  // Loads the student's code
  studentCode = await helpers.readCode("./src/index.js");
  return studentCode;
});

test("The song should have 200 lines", () => {
  expect.assertions(1);

  const lines = sing();

  expect(lines.length).toBe(200);
});

test("Each line should be correct", () => {
  expect.assertions(200);

  const lines = sing();

  for (let i = 0; i < 97; i++) {
    expect(lines[i * 2]).toBe(`${99 - i} bottles of beer on the wall, ${99 - i} bottles of beer.`);
    expect(lines[i * 2 + 1]).toBe(`Take one down and pass it around, ${98 - i} bottles of beer on the wall.`);
  }

  expect(lines[194]).toBe("2 bottles of beer on the wall, 2 bottles of beer.");
  expect(lines[195]).toBe("Take one down and pass it around, 1 bottle of beer on the wall.");
  expect(lines[196]).toBe("1 bottle of beer on the wall, 1 bottle of beer.");
  expect(lines[197]).toBe("Take one down and pass it around, no more bottles of beer on the wall.");
  expect(lines[198]).toBe("No more bottles of beer on the wall, no more bottles of beer.");
  expect(lines[199]).toBe("Go to the store and buy some more, 99 bottles of beer on the wall.");
});

test("You should not brute force by copying an pasting", () => {
  expect.assertions(4);

  const functionContentRegex = /function sing.*?{([\s\S]*?)}/gm;
  const [, code] = functionContentRegex.exec(studentCode);
  expect(code.trim()).not.toBe("");

  expect(studentCode.includes("78 bottles of beer")).toBe(false);
  expect(studentCode.includes("46 bottles of beer")).toBe(false);
  expect(studentCode.includes("24 bottles of beer")).toBe(false);
});
