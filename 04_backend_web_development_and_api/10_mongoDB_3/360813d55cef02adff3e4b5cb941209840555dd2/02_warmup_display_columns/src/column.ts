export function column(numberOfLines: number, lineContent: string): string {
  let result = "";
  for (let i = 0; i < numberOfLines; i++) {
    result += lineContent + "\n";
  }
  return result;
}
