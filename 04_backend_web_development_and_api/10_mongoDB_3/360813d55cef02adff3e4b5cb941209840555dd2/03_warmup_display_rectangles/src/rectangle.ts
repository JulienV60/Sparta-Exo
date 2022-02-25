import { line } from "./line";
import { column } from "./column";

export function rectangle(width: number, height: number): string {
  return column(height, line(width));
}
