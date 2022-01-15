const formatStorage = require("../src/index");

describe("#formatStorage", () => {
  test("Should return an array", () => {
    const testArray = [[], [1, 2], [3], [4, 5], [6, 7], [8, 9]];
    const testResult = formatStorage(testArray);

    expect(testResult).not.toBe(null);
    expect(testResult).not.toBe(undefined);
    expect(Array.isArray(testResult)).toBe(true);
  });

  test("Should return an array with only numbers", () => {
    const testArray = [[], [1, 2], [3], [4, 5], [6, 7], [8, 9]];
    const testResult = formatStorage(testArray);

    expect(!testResult.some(isNaN)).toBe(true);
  });

  test("Should concatenate all sub-arrays in one", () => {
    const testArray = [[], [1, 2], [3], [4, 5], [6, 7], [8, 9]];
    const testResult = formatStorage(testArray);

    const groundTruth = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(testResult).toEqual(groundTruth);
  });
});
