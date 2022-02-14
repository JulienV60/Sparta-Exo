import { Draw } from "./types";

export function lottery_draw(): Draw {
  const result = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)];
  return result;
}
