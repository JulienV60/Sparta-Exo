# Fake blog

## Context and Objectives

We've seen how to read data and now we want to explore the CUD side of the CRUD.

By leveraging a useful little package, we can create an API locally with just a JSON file as its database.
We will be using `json-server` for that.

The JSON file is `db.json` and is located at the root of the exercise. When you request the API to create a post, the file will be updated to reflect the changes you make so you can check the file or just make GET calls with your browser to see your updates during your testing.

There is no `yarn start` for this exercise but you can create one if you need.

## Specs

For this exercise, you will need to start `yarn api` alongside your tries: this will launch a mini API on `http://localhost:3491` that will present you with a list of blog posts.

Here are the routes that are given to you for this exercise:

```
GET    /posts
GET    /posts/1
POST   /posts
PUT    /posts/1
PATCH  /posts/1
DELETE /posts/1
```

`1` is an example and the default post you have in your `db.json` file at the root of the exercise but creating a new post will add more. `id`s are incremental by default (meaning you will have `1`, then `2`, then `3` and so on).

The goal of this exercise is to create some functions to deal with the creating, update and deletion of posts.

In `src/create-post.ts`, a function `createPost` that takes a title and an author and creates a new post with those.

In `src/update-post.ts`, three functions:
- `updatePostTitle` will only update the title of a post and will have two arguments: the id and the new title,
- `updatePostAuthor` will only update the author of a post and will have two arguments; the id and the new author,
- `updatePost` will overwrite the post data and will have three arguments: the id, the new title and the new author.

⚠️ ⚠️ ⚠️
To facilitate testing, we test your code with another _host_ so please create a .env file with:

```
HOST="localhost:3491"
```

And make your requests using:

```
`http://${process.env.HOST}/`
```

If you dont, your tests won't pass.
⚠️ ⚠️ ⚠️
