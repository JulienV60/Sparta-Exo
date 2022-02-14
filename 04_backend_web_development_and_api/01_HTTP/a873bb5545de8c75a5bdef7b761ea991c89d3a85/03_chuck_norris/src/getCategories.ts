import request from "@fewlines-education/request";

function getCategories() {
  request("https://api.chucknorris.io/jokes/categories", (error, html) => {
    if (error) {
      return console.error(error);
    } else {
      return console.log(html);
    }
  });
}

// leave line below for tests to work properly
export { getCategories };
