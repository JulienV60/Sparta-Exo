import request from "@fewlines-education/request";
import "dotenv/config";

function updatePostTitle(id: number) {
  request(
    `http://${process.env.HOST}/posts/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify({ id: "1", title: "New title" }),
      headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
      if (error) {
        console.error(error);
      } else {
        const json = JSON.parse(body);
        console.log(json);
      }
    },
  );
}

function updatePostAuthor(id: number) {
  request(
    `http://${process.env.HOST}/posts/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify({ id: "1", author: "New author" }),
      headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
      if (error) {
        console.error(error);
      } else {
        const json = JSON.parse(body);
        console.log(json);
      }
    },
  );
}
function updatePost(id: number) {
  request(
    `http://${process.env.HOST}/posts/${id}`,
    {
      method: "PUT",
      body: JSON.stringify({ id: "1", title: "New title", author: "New author" }),
      headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
      if (error) {
        console.error(error);
      } else {
        const json = JSON.parse(body);
        console.log(json);
      }
    },
  );
}

export { updatePost, updatePostAuthor, updatePostTitle };
