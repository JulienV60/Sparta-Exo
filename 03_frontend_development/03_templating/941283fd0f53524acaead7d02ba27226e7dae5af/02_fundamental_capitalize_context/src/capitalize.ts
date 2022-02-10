// Copy your function `capitalize` from the first exercise

export function capitalize(word: string): string {
  const result = word.charAt(0).toUpperCase() + word.slice(1);
  return result;
}
