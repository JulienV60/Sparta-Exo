# Warmup: Filter By First Letter Alphabetically

## Context and objectives

You company asks you now to filter those clients alphabetically after filtering them with the first letter of their last names.

## Specs

Copy your `filterByFirstLetter` function from the previous exercise and create a new one called `filterByFirstLetterOrdered`, that will use the previous function and add the alphabetical ordering.

Write `filterByFirstLetterOrdered` with the following specifications:

- it takes two parameters:
  - the list of clients, typed with `Customer` (that you can import from `data/customers`)
  - a letter to search for, typed as a string
- it returns a type `Customer`, which is an array of objects with `first_name` and `last_name` as keys, sorted alphabetically by `last_name`

```ts
filterByFirstLetterOrdered(customers, "B");
/* for example, returns:
[
  { first_name: 'Haskell', last_name: 'Baines' },
  { first_name: 'Trixie', last_name: 'Barkes' },
  { first_name: 'Mozelle', last_name: 'Barkway' },
  { first_name: 'Wylma', last_name: 'Barlthrop' },
  ...
]
*/
```

You can use `yarn start` to to help you during development. (but you will need to import the data and do some `console.log()` yourself)
