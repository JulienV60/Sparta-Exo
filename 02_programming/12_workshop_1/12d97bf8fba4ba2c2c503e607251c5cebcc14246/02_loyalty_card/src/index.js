import readline from "readline";
import { Add } from "./add.js";
import { Acces } from "./Acces.js";
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let listOfCustomers = [];
console.log("Welcome");
console.log("*******************************************************\n");
Accueil();

function Accueil() {
  console.log("1 - Add new customer\n");
  console.log("2 - Acces customer data\n");
  console.log("3 - Quit\n");
  reader.question("\ud83e\udd16 Choose an action\n> ", (reponseAccueil) => {
    if (reponseAccueil === "1" || reponseAccueil === "&") {
      Add(reader, listOfCustomers);
    }

    if (reponseAccueil === "2" || reponseAccueil === "é") {
      Acces(reader, listOfCustomers);
    }

    if (reponseAccueil === "3" || reponseAccueil === "") {
      reader.close();
    } else "Wrong input";
  });
}

export { Accueil, listOfCustomers };
