const readline = require("readline");

const readyForm = require("./readyForm");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readyForm(reader);
