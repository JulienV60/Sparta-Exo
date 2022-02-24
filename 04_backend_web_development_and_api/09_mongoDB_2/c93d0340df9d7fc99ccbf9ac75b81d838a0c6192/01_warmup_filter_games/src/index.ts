import { Game } from "./types";
import { filterGameByPlatform } from "./games";

const games: Game[] = [
  { name: "Dark Souls", platform: "PS3" },
  { name: "Final Fantasy VII Remake", platform: "PS4" },
  { name: "Nier Automata", platform: "PS4" },
  { name: "Battlefield 1", platform: "PC" },
  { name: "Persona 5 Royal", platform: "PS4" },
];

const ps4Games = filterGameByPlatform(games, "PS4");

console.log(ps4Games);
// Should return:
// [
//   { name: "Final Fantasy VII Remake", platform: "PS4" },
//   { name: "Nier Automata", platform: "PS4" },
//   { name: "Persona 5 Royal", platform: "PS4" },
// ];
