import { lottery_draw } from "./lottery_draw";
import { Draw } from "./types";

export function checkIfIWon(ticket: Draw): void {
  const resultat = lottery_draw();

  if (ticket[0] === resultat[0] && ticket[1] === resultat[1] && ticket[2] === resultat[2]) {
    console.log("You won the lottery!");
  } else {
    console.log("You lost...");
  }
}
