const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const identityForm = (whoiam) => {
  whoiam.question("first name\n", (first) => {
    whoiam.question("last name\n", (second) => {
      whoiam.question("age\n", (age) => {
        console.log(`Your name is ${first} ${second} and you are ${age}.`);
        whoiam.close();
      });
    });
  });
};

// Leave line below for tests to work
module.exports = identityForm;
