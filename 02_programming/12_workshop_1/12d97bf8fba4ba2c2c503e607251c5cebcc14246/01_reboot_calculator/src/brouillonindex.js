import readline from "readline";
import { calculator } from "./calculator.js";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Ready to compute operations!");
console.log("****************************\n");

first();
function first() {
  reader.question("Enter the first Number\n> ", (numberOne) => {
    if (isNaN(numberOne) === true) {
      console.log("Wrong Input");
      first();
    } else {
      ChoosenOperation(numberOne);
    }
  });
}
function ChoosenOperation(numberOne) {
  reader.question("Choose an operation: [ + | - | * | / ]\n> ", (operator) => {
    if (operator == "+") {
      second(numberOne, operator);
    }
    if (operator == "-") {
      second(numberOne, operator);
    }
    if (operator === "*") {
      second(numberOne, operator);
    }
    if (operator == "/") {
      second(numberOne, operator);
    }
    if (
      operator === "(" ||
      operator === ")" ||
      operator === "[" ||
      operator === "]" ||
      operator === "{" ||
      operator === "}"
    ) {
      console.log("Unknown operation...\nEnter a valid Command [ + | - | * | / ] ");
      ChoosenOperation(numberOne);
    } else if (operator !== "+") {
      console.log("Wrong Input");
      ChoosenOperation(numberOne);
    }
  });
}
function second(numberOne, operator) {
  reader.question("Enter the second number\n> ", (numberTwo) => {
    if (isNaN(numberTwo) === true) {
      console.log("Wrong Input");
      second(numberOne, operator);
    } else {
      return resultat(numberOne, operator, numberTwo);
    }
  });
}

function resultat(numberOne, operator, numberTwo) {
  return calculator(reader, numberOne, operator, numberTwo);
}
