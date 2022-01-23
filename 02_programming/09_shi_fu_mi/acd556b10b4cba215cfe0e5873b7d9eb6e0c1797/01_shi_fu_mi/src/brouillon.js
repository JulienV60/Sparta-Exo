const readline = require("readline");
const { start } = require("repl");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function WelcomeToTheShifumiGame(reader) {
  let IA = ["Pierre", "Feuille", "Ciseaux"];
  let IAChoice = IA[Math.floor(Math.random() * 3)];

  function Accueil() {
    reader.question("Welcome to the ShiFumi!\n\nChoose a move:\n\nPierre,Feuille,Ciseaux?[1,2,3]\n\n", startGame);
  }

  /// \ud83e\udd1c = EMOJI PIERRE
  /// \ud83e\udd1e = EMOJI CISEAUX
  /// \ud83e\udd1a = EMOJI FEUILLE

  function startGame(Joueur) {
    if (Joueur === "1" && IAChoice === "Ciseaux") {
      console.log("Joueur\n\n\ud83e\udd1c\nIA move\n\n\ud83e\udd1e\n\nYOU WON\n\n");
      playAgain();
    }

    if (Joueur === "1" && IAChoice === "Feuille") {
      console.log("You loose\nIA WON!");
      playAgain();
    }

    if (Joueur === "1" && IAChoice === "Pierre") {
      console.log("DRAW\n");
      playAgain();
    }

    if (Joueur === "2" && IAChoice === "Pierre") {
      console.log("Joueur\n\n\ud83e\udd1c\nIA move\n\n\ud83e\udd1e\n\nYOU WON\n\n");
      playAgain();
    }

    if (Joueur === "2" && IAChoice === "Ciseaux") {
      console.log("You loose\n IA WON");
      playAgain();
    }

    if (Joueur === "2" && IAChoice === "Feuille") {
      console.log("DRAW");
    }

    if (Joueur === "3" && IAChoice === "Feuille") {
      console.log("You Won");
    }

    if (Joueur === "3" && IAChoice === "Pierre") {
      console.log("You loose\n IA WON");
    }

    if (Joueur === "3" && IAChoice === "Ciseaux") {
      console.log("DRAW");
    }
    if (Joueur === "4") {
      console.log("ENTRE 1 ET 3 ON A DIT ");
    }
  }
  Accueil();

  function playAgain() {
    reader.question("Play Again ? ( Yes or No)", (reponse) => {
      if (reponse === "Y" || reponse === "Yes" || reponse === "y") {
        Accueil();
      } else if (reponse === "N" || reponse === "No" || reponse === "n") {
        reader.close();
      }
    });
  }
}
WelcomeToTheShifumiGame(reader);
