import request from "@fewlines-education/request";
import "dotenv/config";

function createPost(title: string, author: string) {
  request(
    `http://${process.env.HOST}`,
    {
      method: "POST",
      body: JSON.stringify({ title, author }),
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
export { createPost };
