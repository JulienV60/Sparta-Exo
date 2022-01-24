import { getRandomJoke } from "awesome-dev-jokes";

const Joke = "./awesome-dev-jokes";

function makeAJoke() {
  console.log(getRandomJoke(Joke));
}

export default makeAJoke;
