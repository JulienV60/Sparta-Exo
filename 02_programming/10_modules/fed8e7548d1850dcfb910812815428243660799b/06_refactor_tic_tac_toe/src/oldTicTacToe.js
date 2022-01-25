const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function renderCell(cell) {
  if (cell === null) {
    return "_";
  } else {
    return cell;
  }
}

function renderRow(letter, state) {
  const cells = state[letter];

  const row = cells.map(renderCell).join(" | ");

  return `${letter} ${row}`;
}

function renderBoard(state) {
  const letters = Object.keys(state);

  const rows = letters.map((letter) => renderRow(letter, state)).join("\n");

  const header = "  1   2   3";

  return `${header}\n${rows}`;
}

function isNotNull(value) {
  return value !== null;
}

function flattenArray(arrayOfArray) {
  return arrayOfArray.reduce((newArray, array) => newArray.concat(array), []);
}

const WINNING_COORDINATES = [
  [
    { letter: "a", digit: "0" },
    { letter: "a", digit: "1" },
    { letter: "a", digit: "2" },
  ],
  [
    { letter: "b", digit: "0" },
    { letter: "b", digit: "1" },
    { letter: "b", digit: "2" },
  ],
  [
    { letter: "c", digit: "0" },
    { letter: "c", digit: "1" },
    { letter: "c", digit: "2" },
  ],
  [
    { letter: "a", digit: "0" },
    { letter: "b", digit: "1" },
    { letter: "c", digit: "2" },
  ],
  [
    { letter: "a", digit: "2" },
    { letter: "b", digit: "1" },
    { letter: "c", digit: "0" },
  ],
  [
    { letter: "a", digit: "0" },
    { letter: "b", digit: "0" },
    { letter: "c", digit: "0" },
  ],
  [
    { letter: "a", digit: "1" },
    { letter: "b", digit: "1" },
    { letter: "c", digit: "1" },
  ],
  [
    { letter: "a", digit: "2" },
    { letter: "b", digit: "2" },
    { letter: "c", digit: "2" },
  ],
];

const state = {
  a: Array(3).fill(null),
  b: Array(3).fill(null),
  c: Array(3).fill(null),
};

let currentPlayer;

function handleInput(input) {
  const coordinate = getCoordinate(input);
  if (coordinate) {
    updateState(coordinate);
    if (hasWinner()) {
      console.log(renderBoard(state));
      console.log(`Congratulations ${currentPlayer}, you won! ＼(＾O＾)／`);
      reader.close();
    } else if (gameIsFinished(state)) {
      console.log(renderBoard(state));
      console.log("Looks like it's a tie. Thanks for playing! ¯\\_(ツ)_/¯");
      reader.close();
    } else {
      nextPlayer();
      playTurn();
    }
  } else {
    console.log("This is not a valid move");
    playTurn();
  }
}

function getCoordinate(input) {
  const letter = input[0];
  const digit = input[1] - 1;

  if (state[letter] && state[letter][digit] === null) {
    return { letter: letter, digit: digit };
  } else {
    return null;
  }
}

function updateState(coordinate) {
  const line = state[coordinate.letter];

  line[coordinate.digit] = currentPlayer;
}

function nextPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function playTurn() {
  console.log(renderBoard(state));
  reader.question(`${currentPlayer}: What is your move? e.g: a1\n`, handleInput);
}

function start() {
  currentPlayer = ["X", "O"][Math.round(Math.random())];

  playTurn();
}

function gameIsFinished(state) {
  const allValues = flattenArray(Object.values(state));

  return allValues.every(isNotNull);
}

function hasWinner() {
  const isWinningLine = (line) => {
    const pattern = line.map((coordinate) => state[coordinate.letter][coordinate.digit]).join("");

    return pattern === "XXX" || pattern === "OOO";
  };

  return WINNING_COORDINATES.some(isWinningLine);
}

start();
