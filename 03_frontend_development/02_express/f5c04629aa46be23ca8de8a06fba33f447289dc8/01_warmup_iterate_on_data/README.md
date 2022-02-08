# Warmup: Iterate on data

## Context and objectives

Working for a company, you have to automate the retrieval of customers' email addresses from the database so they can receive diverse information..

## Specs

- Type **`CustomerType`** as **Type Alias** using the following data sample:

  ```typescript
  { id: 24, first_name: "Alexander", last_name: "Collip", email: "acollip0@redcross.local", gender: "Male" },
  { id: 42, first_name: "Filberto", last_name: "Mowles", email: "fmowles3@msu.local", gender: "Female" },
  ...
  ```

  > You don't know in advance how many customers the database may have!

- Code a function **`getEmails()`** that will take an array of the previously typed data, to only get emails and return all of them:

  ```typescript
  getEmails(<customer_data>);
  // ["acollip0@redcross.org", "fmowles3@msu.edu", ...]
  ```

> You can use `yarn test` to help you during the development.

Don't forget to export your function.

**Eslint will block you if you don't give a function return type or arguments types**
