export function rectangle(width: number, height: number): string {
  let rectangle = "";
  for (let i = 0; i < height; i++) {
    for (let j = 0; j <= width; j++) {
      if (j === width) {
        rectangle += "\n";
      } else {
        rectangle += "*";
      }
    }
  }
  return rectangle;
}
