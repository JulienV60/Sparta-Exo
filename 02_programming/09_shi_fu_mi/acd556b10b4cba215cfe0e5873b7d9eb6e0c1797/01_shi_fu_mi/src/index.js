const readline = require("readline");
const { start } = require("repl");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/// LISTE EMOTICONES POUR SHIFUMI

/// \ud83e\udd16  = ROBOT
/// \ud83d\ude0e = ALONE PLAYER
// \ud83e\udd1c = EMOJI PIERRE
/// \ud83e\udd1e = EMOJI CISEAUX
/// \ud83e\udd1a = EMOJI FEUILLE
///  \ud83e\udd13 = Joueur 1
///  \ud83e\udd20 = Joueur 2

/// Correctifs généraux du 23/01/2022

/// Ajout du Match IA / Emoticones, Clarté, 3 manches, Correctifs Callback, Reset Score aprés Callback
/// Ajout du Match PVP / Emoticones, Clarté, 3 manches,Correctifs Callback, Reset Score aprés Callback

let resultMatch = [0, 0];
if (resultMatch[0] === 3 || resultMatch[1] === 3);

console.log("-----------------------------------------------------------------------------");
console.log("----------------------------    WELCOME    ----------------------------------");
console.log("----------------------------               ----------------------------------");
console.log("----------------------------    TO  THE    ----------------------------------");
console.log("----------------------------               ----------------------------------");
console.log("----------------------------   SHI-FU-Mi  -----------------------------------");
console.log("----------------------------              -----------------------------------");
console.log("----------------------------      GAME    -----------------------------------");
console.log("-----------------------------------------------------------------------------");
console.log("");
console.log("");
ShiFumi();

function ShiFumi() {
  console.log("                                                                             ");
  console.log("-----------------------------------------------------------------------------");
  console.log(
    "                       [1:\ud83d\ude0eVS\ud83e\udd16]     [2:\ud83e\udd20VS\ud83e\udd21] ??              ",
  );
  console.log("-----------------------------------------------------------------------------\n");
  reader.question("Entre ton choix ?\n\n>", (reponseQuestionJoueur) => {
    if (
      reponseQuestionJoueur === "1" ||
      reponseQuestionJoueur === "1 Joueur" ||
      reponseQuestionJoueur === "Solo" ||
      reponseQuestionJoueur === "&"
    ) {
      StartGameAlone();
    }
    if (
      reponseQuestionJoueur === "2" ||
      reponseQuestionJoueur === "2 Joueurs" ||
      reponseQuestionJoueur === "A deux" ||
      reponseQuestionJoueur === "é"
    );
    {
      StartGameAtTwo();
    }
  });
  function StartGameAlone() {
    reader.question("Comment t'appelles-tu ?\n\n>", (PlayerAlone) => {
      if (PlayerAlone !== "") {
        console.log("                                                                             ");
        console.log(`\nBonjour,${PlayerAlone}\n\n    \ud83d\ude0e\n\n    VS\n    \n    \ud83e\udd16\n\n Terminator\n`);
        console.log("                                                                             ");
        console.log("SCORE ---> ", resultMatch);
        console.log("                                                                             ");
        GameAlone();
      } else if (PlayerAlone === "1") {
        console.log(`\nBonjour,${PlayerAlone}\n\n    \ud83d\ude0e\n\n    VS\n    \n    \ud83e\udd16\n\n Terminator\n`);
        console.log("                                                                             ");
        console.log("SCORE ---> ", resultMatch);
        console.log("                                                                             ");
        GameAlone();
      }
    });
  }

  function GameAlone() {
    let Terminator = ["Pierre", "Feuille", "Ciseaux"];
    let TerminatorChoice = Terminator[Math.floor(Math.random() * 3)];
    reader.question(
      "\n[1:Pierre \ud83e\udd1c]  [2:Feuille \ud83e\udd1a]  [3:Ciseaux \ud83e\udd1e] \n\n\n>",
      (JoueurAlone) => {
        if (JoueurAlone === "1" && TerminatorChoice === "Ciseaux") {
          console.log("                                                                             ");
          console.log("\ud83d\ude0e = \ud83e\udd1c  \ud83e\udd16 = \ud83e\udd1e \n\n  \ud83d\ude0e -> WIN \n");
          console.log("                                                                             ");
          resultMatch[0] += 1;
          console.log("SCORE ---> ", resultMatch);
          if (resultMatch[0] == 3 || resultMatch[1] === 3) {
            console.log("-----------------------------------------------------------------------------");
            console.log("                                MATCH OVER                                   ");
            console.log("-----------------------------------------------------------------------------");
            playAgainAlone();
          }
          console.log("                                                                             ");
          GameAlone();
        }
        if (JoueurAlone === "1" && TerminatorChoice === "Feuille") {
          console.log("                                                                             ");
          console.log("\ud83d\ude0e = \ud83e\udd1c  \ud83e\udd16 = \ud83e\udd1a \n\n  \ud83e\udd16 -> WIN \n");
          console.log("                                                                             ");
          resultMatch[1] += 1;
          console.log("SCORE ---> ", resultMatch);
          if (resultMatch[0] == 3 || resultMatch[1] === 3) {
            console.log("-----------------------------------------------------------------------------");
            console.log("                                MATCH OVER                                   ");
            console.log("-----------------------------------------------------------------------------");
            playAgainAlone();
          }
          console.log("                                                                             ");
          GameAlone();
        }
        if (JoueurAlone === "1" && TerminatorChoice === "Pierre") {
          console.log("                                                                             ");
          console.log("\ud83d\ude0e = \ud83e\udd1c  \ud83e\udd16 = \ud83e\udd1c \n\n  --->EGALITE<--- \n");
          console.log("                                                                             ");
          resultMatch[0] += 0;
          resultMatch[1] += 0;
          console.log("SCORE ---> ", resultMatch);
          if (resultMatch[0] == 3 || resultMatch[1] === 3) {
            console.log("-----------------------------------------------------------------------------");
            console.log("                                MATCH OVER                                   ");
            console.log("-----------------------------------------------------------------------------");
            playAgainAlone();
          }
          console.log("                                                                             ");
          GameAlone();
        }

        if (JoueurAlone === "2" && TerminatorChoice === "Pierre") {
          console.log("                                                                             ");
          console.log("\ud83d\ude0e = \ud83e\udd1a  \ud83e\udd16=\ud83e\udd1c \n\n  \ud83d\ude0e -> WIN \n");
          console.log("                                                                             ");
          resultMatch[0] += 1;
          console.log("SCORE ---> ", resultMatch);
          if (resultMatch[0] == 3 || resultMatch[1] === 3) {
            console.log("-----------------------------------------------------------------------------");
            console.log("                                MATCH OVER                                   ");
            console.log("-----------------------------------------------------------------------------");
            playAgainAlone();
          }
          console.log("                                                                             ");
          GameAlone();
        }
        if (JoueurAlone === "2" && TerminatorChoice === "Ciseaux") {
          console.log("                                                                             ");
          console.log("\ud83d\ude0e = \ud83e\udd1a  \ud83e\udd16 = \ud83e\udd1e \n\n  \ud83e\udd16 -> WIN \n");
          console.log("                                                                             ");
          resultMatch[1] += 1;
          console.log("SCORE ---> ", resultMatch);
          if (resultMatch[0] == 3 || resultMatch[1] === 3) {
            console.log("-----------------------------------------------------------------------------");
            console.log("                                MATCH OVER                                   ");
            console.log("-----------------------------------------------------------------------------");
            playAgainAlone();
          }
          console.log("                                                                             ");
          GameAlone();
        }
        if (JoueurAlone === "2" && TerminatorChoice === "Feuille") {
          console.log("                                                                             ");
          console.log("\ud83d\ude0e = \ud83e\udd1a  \ud83e\udd16 = \ud83e\udd1a \n\n  --->EGALITE<--- \n");
          console.log("                                                                             ");
          resultMatch[0] += 0;
          resultMatch[1] += 0;
          console.log("SCORE ---> ", resultMatch);
          if (resultMatch[0] == 3 || resultMatch[1] === 3) {
            console.log("-----------------------------------------------------------------------------");
            console.log("                                MATCH OVER                                   ");
            console.log("-----------------------------------------------------------------------------");
            playAgainAlone();
          }
          console.log("                                                                             ");
          GameAlone();
        }
        if (JoueurAlone === "3" && TerminatorChoice === "Feuille") {
          console.log("                                                                             ");
          console.log("\ud83d\ude0e = \ud83e\udd1e  \ud83e\udd16 = \ud83e\udd1a \n\n  \ud83d\ude0e -> WIN \n");
          console.log("                                                                             ");
          resultMatch[0] += 1;
          console.log("SCORE ---> ", resultMatch);
          if (resultMatch[0] == 3 || resultMatch[1] === 3) {
            console.log("-----------------------------------------------------------------------------");
            console.log("                                MATCH OVER                                   ");
            console.log("-----------------------------------------------------------------------------");
            playAgainAlone();
          }
          console.log("                                                                             ");
          GameAlone();
        }
        if (JoueurAlone === "3" && TerminatorChoice === "Pierre") {
          console.log("                                                                             ");
          console.log("\ud83d\ude0e = \ud83e\udd1e  \ud83e\udd16 = \ud83e\udd1c \n\n  \ud83e\udd16 -> WIN \n");
          console.log("                                                                             ");
          resultMatch[1] += 1;
          console.log("SCORE ---> ", resultMatch);
          if (resultMatch[0] == 3 || resultMatch[1] === 3) {
            console.log("-----------------------------------------------------------------------------");
            console.log("                                MATCH OVER                                   ");
            console.log("-----------------------------------------------------------------------------");
            playAgainAlone();
          }
          console.log("                                                                             ");
          GameAlone();
        }
        if (JoueurAlone === "3" && TerminatorChoice === "Ciseaux") {
          console.log("                                                                             ");
          console.log("\ud83d\ude0e = \ud83e\udd1e  \ud83e\udd16 = \ud83e\udd1e \n\n  --->EGALITE<--- \n");
          console.log("                                                                             ");
          resultMatch[0] += 0;
          resultMatch[1] += 0;
          console.log("SCORE ---> ", resultMatch);
          if (resultMatch[0] == 3 || resultMatch[1] === 3) {
            console.log("-----------------------------------------------------------------------------");
            console.log("                                MATCH OVER                                   ");
            console.log("-----------------------------------------------------------------------------");
            console.log();
            playAgainAlone();
          }
          console.log("                                                                             ");

          GameAlone();
        }
        if (JoueurAlone === "") {
          console.log("                                                                             ");
          console.log("\nENTRE 1 ET 3 ON A DIT \n");
          console.log("                                                                             ");
          GameAlone();
        }
      },
    );
  }
  function playAgainAlone() {
    reader.question("\n\nPlay Again ?\n\n(Yes or No)\n\n>", (reponseAlone) => {
      if (reponseAlone === "Y" || reponseAlone === "Yes" || reponseAlone === " ") {
        GameAlone((resultMatch = [0, 0]));
      } else if (reponseAlone === "N" || reponseAlone === "No" || reponseAlone === "n") {
        reader.close();
      }
    });
  }
  function StartGameAtTwo() {
    console.log("                                                                             ");
    reader.question("Comment t'appelles-tu Joueur Un ? \ud83e\udd20 \n\n>", (PlayerOne) => {
      if (PlayerOne === "") {
        console.log(`\nBonjour,${PlayerOne}\n\n    \ud83e\udd20\n\n    VS\n    \n    \ud83e\udd21\n\nJoueur Deux \n`);
      } else if (PlayerOne !== "") {
        console.log(`\nBonjour,${PlayerOne}\n\n    \ud83e\udd20\n\n    VS\n    \n    \ud83e\udd21\n\nJoueur Deux \n`);
      }
      console.log("                                                                             ");
      reader.question("\net toi Joueur Deux ? \ud83e\udd21\n\n>", (PlayerTwo) => {
        if (PlayerTwo === "") {
          console.log(`\nBonjour,${PlayerTwo}\n\n    \ud83e\udd21\n\n    VS\n    \n    \ud83e\udd20\n\nJoueur Un \n`);
          GameAtTwo();
        } else if (PlayerTwo !== "") {
          console.log(`\nBonjour,${PlayerTwo}\n\n    \ud83e\udd21\n\n    VS\n    \n    \ud83e\udd20\n\nJoueur Un \n`);
          GameAtTwo();
        }
      });
    });
  }

  function GameAtTwo() {
    reader.question(
      "\n \ud83e\udd20 [1:Pierre \ud83e\udd1c]  [2:Feuille \ud83e\udd1a]  [3:Ciseaux \ud83e\udd1e] \ud83e\udd20 \n\n\n>",
      (PlayerOne) =>
        reader.question(
          "\n \ud83e\udd21 [1:Pierre \ud83e\udd1c]  [2:Feuille \ud83e\udd1a]  [3:Ciseaux \ud83e\udd1e] \ud83e\udd21 \n\n\n>",
          (PlayerTwo) => {
            if (PlayerOne === "1" && PlayerTwo === "3") {
              console.log("                                                                             ");
              console.log("\ud83e\udd20 = \ud83e\udd1c  \ud83e\udd21 = \ud83e\udd1e \n\n  \ud83e\udd20 -> WIN \n");
              console.log("                                                                             ");
              resultMatch[0] += 1;
              console.log("SCORE ---> ", resultMatch);
              if (resultMatch[0] == 3 || resultMatch[1] === 3) {
                console.log("-----------------------------------------------------------------------------");
                console.log("                                MATCH OVER                                   ");
                console.log("-----------------------------------------------------------------------------");
                playAgainAtTwo();
              }
              console.log("                                                                             ");
              GameAtTwo();
            }

            if (PlayerOne === "1" && PlayerTwo === "2") {
              console.log("                                                                             ");
              console.log("\ud83e\udd20 = \ud83e\udd1c  \ud83e\udd21 = \ud83e\udd1a \n\n  \ud83e\udd21 -> WIN \n");
              console.log("                                                                             ");
              resultMatch[1] += 1;
              console.log("SCORE ---> ", resultMatch);
              if (resultMatch[0] == 3 || resultMatch[1] === 3) {
                console.log("-----------------------------------------------------------------------------");
                console.log("                                MATCH OVER                                   ");
                console.log("-----------------------------------------------------------------------------");
                playAgainAtTwo();
              }
              console.log("                                                                             ");
              GameAtTwo();
            }

            if (PlayerOne === "1" && PlayerTwo === "1") {
              console.log("                                                                             ");
              console.log("\ud83e\udd20 = \ud83e\udd1c  \ud83e\udd21 = \ud83e\udd1c \n\n  --->EGALITE<--- \n");
              console.log("                                                                             ");
              resultMatch[0] += 0;
              resultMatch[1] += 0;
              console.log("SCORE ---> ", resultMatch);
              if (resultMatch[0] == 3 || resultMatch[1] === 3) {
                console.log("-----------------------------------------------------------------------------");
                console.log("                                MATCH OVER                                   ");
                console.log("-----------------------------------------------------------------------------");
                playAgainAtTwo();
              }
              console.log("                                                                             ");
              GameAtTwo();
            }
            if (PlayerOne === "2" && PlayerTwo === "1") {
              console.log("                                                                             ");
              console.log("\ud83e\udd20 = \ud83e\udd1a  \ud83e\udd21 = \ud83e\udd1c \n\n  \ud83e\udd20 -> WIN \n");
              console.log("                                                                             ");
              resultMatch[0] += 1;
              console.log("SCORE ---> ", resultMatch);
              if (resultMatch[0] == 3 || resultMatch[1] === 3) {
                console.log("-----------------------------------------------------------------------------");
                console.log("                                MATCH OVER                                   ");
                console.log("-----------------------------------------------------------------------------");
                playAgainAtTwo();
              }
              console.log("                                                                             ");
              GameAtTwo();
            }
            if (PlayerOne === "2" && PlayerTwo === "3") {
              console.log("                                                                             ");
              console.log("\ud83e\udd20 = \ud83e\udd1a  \ud83e\udd21 = \ud83e\udd1e \n\n  \ud83e\udd21 -> WIN \n");
              console.log("                                                                             ");
              resultMatch[1] += 1;
              console.log("SCORE ---> ", resultMatch);
              if (resultMatch[0] == 3 || resultMatch[1] === 3) {
                console.log("-----------------------------------------------------------------------------");
                console.log("                                MATCH OVER                                   ");
                console.log("-----------------------------------------------------------------------------");
                playAgainAtTwo();
              }
              console.log("                                                                             ");
              GameAtTwo();
            }
            if (PlayerOne === "2" && PlayerTwo === "2") {
              console.log("                                                                             ");
              console.log("\ud83e\udd20 = \ud83e\udd1a  \ud83e\udd21 = \ud83e\udd1a \n\n  --->EGALITE<--- \n");
              console.log("                                                                             ");
              resultMatch[0] += 0;
              resultMatch[1] += 0;
              console.log("SCORE ---> ", resultMatch);
              if (resultMatch[0] == 3 || resultMatch[1] === 3) {
                console.log("-----------------------------------------------------------------------------");
                console.log("                                MATCH OVER                                   ");
                console.log("-----------------------------------------------------------------------------");
                playAgainAtTwo();
              }
              console.log("                                                                             ");
              GameAtTwo();
            }

            if (PlayerOne === "3" && PlayerTwo === "2") {
              console.log("                                                                             ");
              console.log("\ud83e\udd20 = \ud83e\udd1e  \ud83e\udd21 = \ud83e\udd1a \n\n  \ud83e\udd20 -> WIN \n");
              console.log("                                                                             ");
              resultMatch[0] += 1;
              console.log("SCORE ---> ", resultMatch);
              if (resultMatch[0] == 3 || resultMatch[1] === 3) {
                console.log("-----------------------------------------------------------------------------");
                console.log("                                MATCH OVER                                   ");
                console.log("-----------------------------------------------------------------------------");
                playAgainAtTwo();
              }
              console.log("                                                                             ");
              GameAtTwo();
            }
            if (PlayerOne === "3" && PlayerTwo === "1") {
              console.log("                                                                             ");
              console.log("\ud83e\udd20 = \ud83e\udd1e  \ud83e\udd21 = \ud83e\udd1c \n\n  \ud83e\udd21 -> WIN \n");
              console.log("                                                                             ");
              resultMatch[1] += 1;
              console.log("SCORE ---> ", resultMatch);
              if (resultMatch[0] == 3 || resultMatch[1] === 3) {
                console.log("-----------------------------------------------------------------------------");
                console.log("                                MATCH OVER                                   ");
                console.log("-----------------------------------------------------------------------------");
                playAgainAtTwo();
              }
              console.log("                                                                             ");
              GameAtTwo();
            }
            if (PlayerOne === "3" && PlayerTwo === "3") {
              console.log("                                                                             ");
              console.log("\ud83e\udd20 = \ud83e\udd1e  \ud83e\udd21 = \ud83e\udd1e \n\n  --->EGALITE<--- \n");
              console.log("                                                                             ");
              resultMatch[0] += 0;
              resultMatch[1] += 0;
              console.log("SCORE ---> ", resultMatch);
              if (resultMatch[0] == 3 || resultMatch[1] === 3) {
                console.log("-----------------------------------------------------------------------------");
                console.log("                                MATCH OVER                                   ");
                console.log("-----------------------------------------------------------------------------");
                console.log();
                playAgainAtTwo();
              }
              console.log("                                                                             ");

              GameAtTwo();
            }
            if (PlayerOne === "" || PlayerTwo === "") {
              console.log("                                                                             ");
              console.log("\nENTRE 1 ET 3 ON A DIT \n");
              console.log("                                                                             ");
              GameAtTwo();
            }
          },
        ),
    );
  }
  function playAgainAtTwo() {
    reader.question("\n\nPlay Again ?\n\n(Yes or No)\n\n>", (reponseAtTwo) => {
      if (reponseAtTwo === "Y" || reponseAtTwo === "Yes" || reponseAtTwo === " ") {
        GameAtTwo((resultMatch = [0, 0]));
      } else if (reponseAtTwo === "N" || reponseAtTwo === "No" || reponseAtTwo === "n") {
        reader.close();
      }
    });
  }
}
