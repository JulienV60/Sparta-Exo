# Warmup: Sorting Machine

## Context and objectives

Your company wants to be able sort its daily revenue displayed on the `revenues` page, by ascending or descending order.

## Specs

Let's do a `sortingMachine` function that takes two parameters:

- An `array` of `numbers`
- A `boolean`

The `boolean` represents if we use an `ascending` order or not (so, `descending` here).

`sortingMachine` returns the same array sorted (so, it changes its values).

E.g:

```typescript
const numArray = [10000, 104, 99, 2000, 3000, 1500];
sortingMachine(numArray, true);
console.log(numArray); // [99, 104, 1500, 2000, 3000, 10000]
sortingMachine(numArray, false);
console.log(numArray); // [10000, 3000, 2000, 1500, 104, 99]
```

> You can use `yarn test` to help you during the development.

Don't forget to export your function.

**Eslint will block you if you don't give a function return type or arguments types**
