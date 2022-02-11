// Code here
function findDigit(myArray: number[], digit: number): number[] {
  const result: number[] = [];
  myArray.filter((number) => {
    if (number.toString().includes(digit.toString()) == true) {
      return result.push(number);
    }
  });
  return result;
}

export { findDigit };
