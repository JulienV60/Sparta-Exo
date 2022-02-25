export function column(numberOfLines: number, lineContent: string): string {
  let resultt = "";
  for (let i = 0; i < numberOfLines; i++) {
    resultt += lineContent + "\n";
  }
  return resultt;
}
