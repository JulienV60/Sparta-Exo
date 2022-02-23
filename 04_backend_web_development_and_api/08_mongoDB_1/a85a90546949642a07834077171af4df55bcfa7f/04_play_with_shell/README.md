# Play with Mongosh

## Context and objectives

First things first, you have to feel comfortable with the basic CRUD operations using the MongoDB Shell.

For the following exercises, do not hesitate to play with [MongoDB Shell](https://docs.mongodb.com/mongodb-shell/) and then just copy/paste the command in the corresponding file.

## Specs

Write one command per file, and feel free to add variables when you need it.

#### `createCollection.js`:

- write the MongoDB shell command you would use to **create a collection named `worldAtlas`**.

To help you get started, here's what we expect:

```js
db.createCollection("worldAtlas")
```

This is both what you should write in the MongoDB Shell and in the `src/createCollection.js` file and this is what we will test.

#### `insertOneCountry.js`:

- write the MongoDB shell command you would use to **insert a country into your `worldAtlas` collection**.

It must have this structure:

```typescript
const newCountry = {
  name: "France",
  capital: "Paris",
  continent: "Europe",
}
```

The rest of the tests will assume all countries have the same structure.

#### `insertManyCountries.js`:

- write the MongoDB shell command you would use to **insert at least 2 other countries with one query into your `worldAtlas` collection**.

#### `findOneCountry.js`:

- write the MongoDB shell command you would use to **query for `Iceland` only**.

We will assume that you have created it in your tests but the tests will put it in the DB before we try to execute your query.

#### `findManyCountries.js`:

- write the MongoDB shell command you would use to **find all the countries from `Europe` in the `worldAtlas` collection**.

#### `updateOneCountry.js`:

- write the MongoDB shell command you would use to **replace the capital city of `Australia` by `Canberra`**, instead of currently wrong name `Sydney`.

#### `updateManyCountries.js`:

- write the MongoDB shell command you would use to **replace all the countries with continent `Europe` by `EU`**.

#### `deleteOneCountry.js`:

- write the MongoDB shell command you would use to **delete `France`**. (please don't reproduce this in real life)

#### `deleteManyCountries.js`:

- write the MongoDB shell command you would use to **delete all the `EU` countries**. (still don't do this in real life)

## MONGODB DATABASE URL

⚠️ This will be necessary for the tests to pass since we need to know your URL.

Don't forget to:

- 1️⃣ Create a `.env` file
- 2️⃣ **BE EXTRA SURE** that it is added to your `.gitignore` file to avoid revealing your password on Github on a push.
- 3️⃣ add the database url in the `.env` file:

  ```shell
  MONGODB_DATABASE_URL='<your-mongo-db-atlas-url>'
  ```

  > Change the placeholder with your own url (Beware to put your password in there, Mongo gives you an URL with `<password>` that should be replaced with the right password).
