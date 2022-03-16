# Warmup: Filter By First Letter

## Context and objectives

Working for a company with a large list of clients, you have been asked to create a `filterByFirstLetter` function that will filter the customers by the first letter of their last names.

## Specs

The function you need to code is in `src/filter_by_first_letter.ts`.

Write a function with the following specifications:

- it takes two parameters:
  - the list of clients, typed with `Customer[]`
  - a letter to search for, typed as a string
- it returns a type `Customer[]`, which is an array of objects with `first_name` and `last_name` as keys

```ts
filterByFirstLetter(customers, "B");
/* for example, returns:
[
  {first_name: "Paul", last_name: "Beckart"},
  {first_name: "Linda", last_name: "Blitza"},
  {first_name: "Lily", last_name: "Baylor"},
  ...
]
*/
```

You can use `yarn start` to to help you during development.

## Tips

Be mindful to the second parameter: if it is not a letter (ie "Er"), the function should return an empty array, since we will only filter from the first letter of the customers' last name.
