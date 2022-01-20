function numberGame(reader) {
  reader.question("\nWelcome!\n\nYou have to find the right number, between 1 and 100!\nGood Luck!\n\n", (number) => {
    let random = Math.floor(Math.random()) * 100;
    if (number === random) {
      console.log("You Won!");
    } else if (number > random) {
      console.log("Too High");
      beBack(reader, "");
    } else if (number < random) {
      console.log("Too Low");
      beBack(reader, "");
    } else {
      console.log("This is not a number");
      beBack(reader, "");
    }

    //reader.close();
  });
}

function beBack(reader, numberTwo) {
  reader.question(
    console.log("Try again", (numberTwo) => {
      console.log("...");
    }),
  );
}

module.exports = numberGame;
