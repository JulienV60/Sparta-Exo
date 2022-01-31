// Replace `unkown` values with the right types
type TeachersList = string[];
type YarnTestResults = boolean[];
type ResultsBulletin = (number | string)[];
type PairsList = string[][];

const batchTeachersList: TeachersList = ["Léo", "Marjorie", "Romel", "Jean", "Pascal"];

const exercise1YarnTestResults: YarnTestResults = [true, true, true, true];
const exercise2YarnTestResults: YarnTestResults = [false, true, false];

const myResultsBulletin: ResultsBulletin = [12, "ABS", 16, 12, 15];

const pairsListClassA: PairsList = [
  ["Alexandre", "Julie"],
  ["Frieda", "Francis"],
  ["Clémence", "Édouard"],
];

const pairsListClassB: PairsList = [
  ["Gaëtan", "Paul"],
  ["Dominique", "Victor"],
  ["Sarah", "Ludovic"],
  ["Simon", "Sophie"],
];

// Leave the line below for tests to work properly.

export { TeachersList, ResultsBulletin, YarnTestResults, PairsList };
