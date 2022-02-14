import { getChuckNorrisJoke } from "./getChuckNorrisJoke";
import { getCategories } from "./getCategories";
import * as readline from "readline";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let waiting = true;

// Don't change this code
function chuckNorrisJokes(): void {
  const consoleLog = console.log;
  console.log = (categories): void => {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    consoleLog(categories);
    waiting = false;
  };
  getCategories();
  waitFor("categories", () => {
    reader.question("\nChoose a category\n> ", (selectedCategory: string) => {
      console.log = (joke): void => {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        consoleLog(joke);
        waiting = false;
      };
      getChuckNorrisJoke(selectedCategory);
      waitFor("joke", () => {
        reader.question("Do you want to continue? (Y/n)\n> ", (userInput: string) => {
          if (userInput === "n") {
            console.log("\nBye!!");
            reader.close();
            console.log = consoleLog;
          } else {
            chuckNorrisJokes();
          }
        });
      });
    });
  });
}

function waitFor(what: string, callback: () => void): void {
  if (waiting) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(`Waiting for ${what}...`);
    setTimeout(() => waitFor(what, callback), 100);
  } else {
    waiting = true;
    callback();
  }
}

// use `yarn start` to start the program
chuckNorrisJokes();
