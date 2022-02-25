export function line(numberOfStars: number): string {
  let result = "";
  for (let i = 0; i < numberOfStars; i++) {
    result += "*";
  }
  return result;
}
