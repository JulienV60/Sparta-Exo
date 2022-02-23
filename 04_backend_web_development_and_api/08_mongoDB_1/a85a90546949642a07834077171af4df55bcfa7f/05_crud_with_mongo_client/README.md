# CRUD with MongoDB Client

## CONTEXT AND OBJECTIVES

For this exercise you will write a script able to interact with the `MongoDB Client`.

We provide you an existing database with a collection `worldAtlas` already populated with some countries.

As a reminder, a country structure looks like:

```typescript
{
  name: "France",
  capital: "Paris",
  continent: "Europe",
}
```

The goal is to perform the same CRUD operations as the previous exercise, but this time using **only** `NodeJS` and `MongoDB client`.

## SPECS

You have to code each operation in separated files:

- `findOneCountry.ts`:

  Find `Iceland` in the `worldAtlas` collection and return it.

- `findManyCountries.ts`:

  Find all the countries from `Europe` in the `worldAtlas` collection and return them as an `array` of countries.

- `insertOneCountry.ts`:

  Take a country as second parameter and insert it into your `worldAtlas` collection and return its `ObjectId`.

- `insertManyCountries.ts`:

  Take an array of countries as a second parameter and insert them (with one `insertMany` query) into your `worldAtlas` collection and return the number of inserted entries.

- `updateOneCountry.ts`:

  Replace the capital of `Australia` by `Canberra` and return it.
  > 🔎 You can query the database after having modified it

- `updateManyCountries.ts`:

  Replace all the countries with continent `Europe` by `EU` and return them as an `array` of countries.
  > 🔎 You can query the database after having modified it

- `deleteOneCountry.ts`:

  Delete `France` from the `worldAtlas` collection. It will return `true` in case of success, `false` otherwise.
  > 🔎 success feedback can be found in the query return: if `deletedCount === 1` it means the deletion was successful

- `deleteManyCountries.ts`:

  Delete all the `European` countries from the `worldAtlas` collection. It will return `true` in case of success, `false` otherwise.
 > 🔎 success feedback can be found in the query return: if `deletedCount > 0` it means the deletion was successful

Each of those functions should take a `Db` as argument.

**⚠️ Don't forget about your types**, you can create and use as many as you need.

To execute your code, import your query function in `index.ts`, place it instead of `showCollections`, and then run `yarn start`.

> Do not hesitate to check manually your DB: `mongo mongo-basics -u mongo-basics-app -p password` (the Database is reset each time you run `yarn start`).

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
