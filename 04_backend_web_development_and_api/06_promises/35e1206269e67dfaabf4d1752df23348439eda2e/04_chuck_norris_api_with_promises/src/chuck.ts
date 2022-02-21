import fetch from "node-fetch";

function getCategories() {
  return fetch("https://api.chucknorris.io/jokes/categories").then((response) => response.json());
  // Your code goes here
}

function getJoke(cate: string) {
  return fetch(`https://api.chucknorris.io/jokes/random?category=${cate}`)
    .then((response) => response.json())
    .then((result) => result.value);
}

// Leave the line below for tests to work properly
export { getCategories, getJoke };
