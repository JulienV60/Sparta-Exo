import { squareNumber } from "./squareNumber";

export function context(arrayOfNumbers: number[]): number[] {
  const result = arrayOfNumbers.map(squareNumber);
  return result;
}
