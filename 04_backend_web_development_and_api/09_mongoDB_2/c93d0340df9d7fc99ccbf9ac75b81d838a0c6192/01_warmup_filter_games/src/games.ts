import { Game } from "./types";

export function filterGameByPlatform(games: Game[], platform: string): Game[] {
  const result = games.filter((element) => {
    if (element.platform == platform) {
      return element.name;
    }
  });
  return result;
}
