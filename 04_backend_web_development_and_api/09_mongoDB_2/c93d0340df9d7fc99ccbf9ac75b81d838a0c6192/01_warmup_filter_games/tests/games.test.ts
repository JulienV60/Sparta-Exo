import { Game } from "../src/types";
import { filterGameByPlatform } from "../src/games";

it("Should be able to return only PS4 games", () => {
  const games: Game[] = [
    { name: "Dark Souls", platform: "PS3" },
    { name: "Final Fantasy VII Remake", platform: "PS4" },
    { name: "Nier Automata", platform: "PS4" },
    { name: "Battlefield 1", platform: "PC" },
    { name: "Persona 5 Royal", platform: "PS4" },
  ];

  const ps4Games = filterGameByPlatform(games, "PS4");

  expect(ps4Games).toEqual([
    { name: "Final Fantasy VII Remake", platform: "PS4" },
    { name: "Nier Automata", platform: "PS4" },
    { name: "Persona 5 Royal", platform: "PS4" },
  ]);
});

it("Should be able to return only PC games", () => {
  const games: Game[] = [
    { name: "Dark Souls", platform: "PS3" },
    { name: "Final Fantasy VII Remake", platform: "PS4" },
    { name: "Nier Automata", platform: "PS4" },
    { name: "Battlefield 1", platform: "PC" },
    { name: "Persona 5 Royal", platform: "PS4" },
  ];

  const ps4Games = filterGameByPlatform(games, "PC");

  expect(ps4Games).toEqual([{ name: "Battlefield 1", platform: "PC" }]);
});
