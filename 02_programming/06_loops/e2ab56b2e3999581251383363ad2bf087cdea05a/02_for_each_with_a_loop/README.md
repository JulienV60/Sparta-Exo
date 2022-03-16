# ForEach with a loop

## Context and objectives

You've seen how `.forEach` works on an array but let's now try to understand what happens behind the scenes.

## Specs

In the `src/index.js`, write a function `forEachLoop` that takes an array as first argument and a function as the second argument.

`forEachLoop` should apply the function to each element but should not return anything

E.g.

```javascript
const numbers = [1, 2, 3, 4];

function log(number) {
  console.log(`- ${number}`)
}

forEachLoop(numbers, log);
// - 1
// - 2
// - 3
// - 4
```

You can see what your function does by running

```bash
yarn start
```

and run the tests with

```bash
yarn test
```
