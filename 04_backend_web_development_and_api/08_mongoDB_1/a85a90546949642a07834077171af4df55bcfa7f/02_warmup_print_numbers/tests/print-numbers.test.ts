import { printNumbers } from "../src/print-numbers"

it("Should print the numbers from 1 to 100", () => {
  expect.assertions(1);

  const logSpy = jest.spyOn(console, "log").mockImplementation()

  printNumbers();

  const expected = logSpy.mock.calls.flat();
  const resultArray = Array.from(Array(100)).map((_, index) => index + 1);

  logSpy.mockRestore()

  if (expected[0] === 0) {
    console.log("Your loop is starting from 0, beware of your starting value!")
  }
  if (expected[expected.length - 1] === 99) {
    console.log("Your loop is ending at 99, beware of your end condition!")
  }





  expect(expected).toEqual(resultArray);
})
