// Leave the line below for tests to work properly
import * as readline from "readline";
import { holidayLocationFinder } from "./holidayLocationFinder";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

holidayLocationFinder(reader);
