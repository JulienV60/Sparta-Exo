# Warmup: Assemble data

## Context and objectives

In order to display a website user profile page, you were provided with the data in the wrong format: rather than an object representing each user's information separately, you were provided with multiple lists containing a single type of data.

It is up to you to assemble this data into objects!

## Specs

The function you need to code is in `src/assembleData.ts`.

Write a `assembleData` function with the following specifications:

- it takes four parameters:
  - the list of user's names
  - the list of user's ages
  - the list of user's countries
  - the list of users who have already traveled or not
- it returns a type `Profile[]`, which is an array of objects with `name`, `age`, `country` and `haveTravaled` as keys

```ts
const names = ["Paul", "Linda"];
const ages = [12, 42];
const countries = ["Britain", "Spain"];
const haveTraveled = [true, false];

assembleData(names, ages, countries, haveTravaled);
/* for example, returns:
[
  { name: Paul, age: 12, country: Britain, haveTraveled: true },
  { name: Linda, age: 42, country: Spain, haveTraveled: false }
]
*/
```

You can use `yarn start` to to help you during development.

## Tips

Your `assembleData` function must be able to accept any array length.

You have been provided with the data tables in the `index.ts` file.
Don't worry: these arrays will all have the same length 😉
