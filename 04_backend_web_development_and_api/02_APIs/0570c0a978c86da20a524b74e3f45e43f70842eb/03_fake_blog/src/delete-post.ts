import request from "@fewlines-education/request";
import "dotenv/config";

function deletePost(id: number) {
  request(
    `http://${process.env.HOST}/posts/${id}`,
    {
      method: "DELETE",
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

export { deletePost };
