const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readyForm = (reader) => {
  reader.question("Hello user!\nAre you ready for today ??!\n", (today) => {
    console.log(`WOW ${today} ??!! Really Nice! Let's goo !!`);
    reader.close();
  });
};

// Leave line below for tests to work
module.exports = readyForm;
