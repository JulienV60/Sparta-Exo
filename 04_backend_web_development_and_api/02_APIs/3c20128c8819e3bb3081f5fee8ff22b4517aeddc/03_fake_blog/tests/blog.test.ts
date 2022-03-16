import * as jsonServer from "json-server";
import { AddressInfo } from "net";
import { Server } from "http";
import request from "@fewlines-education/request";
import { copyFile } from "fs/promises";
import { resolve } from "path";
import { createPost } from "../src/create-post";
import {
  updatePost,
  updatePostAuthor,
  updatePostTitle,
} from "../src/update-post";
import { deletePost } from "../src/delete-post";

function startServer(): Promise<[Server, number]> {
  const middlewares = jsonServer.defaults();
  const server = jsonServer.create();
  const router = jsonServer.router("./tests/db.json");
  server.use(middlewares);
  server.use(router);

  return new Promise((resolve) => {
    const app = server.listen(0, () => {
      resolve([app, (app.address() as AddressInfo).port]);
    });
  });
}

let server: Server;
let port: number;

beforeEach(async () => {
  await copyFile(
    resolve(__dirname, "db_base.json"),
    resolve(__dirname, "db.json")
  );
  [server, port] = await startServer();
});

afterEach(() => {
  server.close();
});

describe("create-post", () => {
  test("It can create posts", (done) => {
    expect.assertions(4);

    process.env.HOST = `localhost:${port}`;
    const fakeLog = jest.spyOn(console, "log").mockImplementation();

    createPost("This is a test", "Frieda");
    request(`http://${process.env.HOST}/posts`, (error, body) => {
      if (error) {
        throw error;
      }
      const json = JSON.parse(body);

      expect(json.length).toBe(2);
      expect(json[json.length - 1].title).toBe("This is a test");
      expect(json[json.length - 1].author).toBe("Frieda");
      expect(json[json.length - 1].id).toBe(2);

      fakeLog.mockRestore();
      done();
    });
  });
});

describe("update-post", () => {
  test("updatePostTitle can update the title of one post", (done) => {
    expect.assertions(3);

    process.env.HOST = `localhost:${port}`;
    const fakeLog = jest.spyOn(console, "log").mockImplementation();

    updatePostTitle(1, "New title");
    request(`http://${process.env.HOST}/posts/1`, (error, body) => {
      if (error) {
        throw error;
      }
      const json = JSON.parse(body);

      expect(json.title).toBe("New title");
      expect(json.author).toBe("Frieda");
      expect(json.id).toBe(1);

      fakeLog.mockRestore();
      done();
    });
  });

  test("updatePostAuthor can update the author of one post", (done) => {
    expect.assertions(3);

    process.env.HOST = `localhost:${port}`;
    const fakeLog = jest.spyOn(console, "log").mockImplementation();

    updatePostAuthor(1, "New author");
    request(`http://${process.env.HOST}/posts/1`, (error, body) => {
      if (error) {
        throw error;
      }
      const json = JSON.parse(body);

      expect(json.title).toBe("My first Blog Post");
      expect(json.author).toBe("New author");
      expect(json.id).toBe(1);

      fakeLog.mockRestore();
      done();
    });
  });

  test("updatePost can update the whole post", (done) => {
    expect.assertions(3);

    process.env.HOST = `localhost:${port}`;
    const fakeLog = jest.spyOn(console, "log").mockImplementation();

    updatePost(1, "New title", "New author");
    request(`http://${process.env.HOST}/posts/1`, (error, body) => {
      if (error) {
        throw error;
      }
      const json = JSON.parse(body);

      expect(json.title).toBe("New title");
      expect(json.author).toBe("New author");
      expect(json.id).toBe(1);

      fakeLog.mockRestore();
      done();
    });
  });

  test("updatePost should overwrite the whole post", (done) => {
    expect.assertions(4);

    process.env.HOST = `localhost:${port}`;
    const fakeLog = jest.spyOn(console, "log").mockImplementation();

    request(
      `http://${process.env.HOST}/posts/1`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "should change",
          author: "should change",
          extraProperty: "should disappear",
        }),
      },
      (error, body) => {
        updatePost(1, "New title", "New author");
        request(`http://${process.env.HOST}/posts/1`, (error, body) => {
          if (error) {
            throw error;
          }
          const json = JSON.parse(body);

          expect(json.title).toBe("New title");
          expect(json.author).toBe("New author");
          expect(json.id).toBe(1);
          expect(json.extraProperty).not.toBeDefined();

          fakeLog.mockRestore();
          done();
        });
      }
    );
  });
});

describe("delete-post", () => {
  test("deletePost should delete a post", (done) => {
    expect.assertions(1);

    process.env.HOST = `localhost:${port}`;
    const fakeLog = jest.spyOn(console, "log").mockImplementation();

    deletePost(1);
    request(`http://${process.env.HOST}/posts/1`, (error, body, response) => {
      if (error) {
        throw error;
      }
      const json = JSON.parse(body);

      expect(response.status).toBe(404)

      fakeLog.mockRestore();
      done();
    });
  });
})
