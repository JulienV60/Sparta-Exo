function numberGame(reader, min = 1, max = 100) {
  //("\nWelcome!\n\nYou have to find the right number, between 1 and 100!\nGood Luck!\n\n");
  //reader.close();
  let random = Math.floor(Math.random() * (max - min) + 1) + min;

  function beBack() {
    reader.question("\nEnter a number\n", reponse);
  }

  function reponse(number) {
    if (number === random) {
      console.log("You Won!");
      reader.close;
    }
    if (number > random) {
      console.log("Too high");
    }
    if (number === min) {
      console.log("You Won!");
    }
    if (number === max) {
      console.log("You Won!");
    }
    if (number < random) {
      console.log("Too Low");
    }
    if (number < min || number > max) {
      console.log("The number is between 1 and 100");
    }
    if (isNaN(number) === true) {
      console.log("This is not a number\n");
    }
    beBack();
  }
  beBack();
}

module.exports = numberGame;
