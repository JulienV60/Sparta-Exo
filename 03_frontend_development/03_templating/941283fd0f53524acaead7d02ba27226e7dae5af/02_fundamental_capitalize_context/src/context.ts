import { capitalize } from "./capitalize";

export function context(sentence: string): string {
  const result = sentence.split(" ");
  for (let i = 0; i < result.length; i++) {
    result[i] = capitalize(result[i]);
  }
  return result.join(" ");
}
