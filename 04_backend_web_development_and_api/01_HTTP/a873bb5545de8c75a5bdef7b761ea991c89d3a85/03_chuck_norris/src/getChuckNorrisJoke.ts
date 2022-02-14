import request from "@fewlines-education/request";

function getChuckNorrisJoke(cate: string) {
  request(`https://api.chucknorris.io/jokes/random?category=${cate}`, (error, html) => {
    if (error) {
      return console.error(error);
    } else {
      const json = JSON.parse(html);
      return console.log(json);
    }
  });
}

// leave line below for tests to work properly
export { getChuckNorrisJoke };
