# Map with a loop

## Context and objectives

You've seen how `.map` works on an array but let's now try to understand what happens behind the scenes.

## Specs

In the `src/index.js`, write a function `mapLoop` that takes an array as first argument and a function as the second argument.

`mapLoop` should return a new array where every element has been "mapped" by the function:

E.g.

```javascript
const numbers = [1, 2, 3, 4];

function double(number) {
  return number * 2;
}

const doubledNumbers = mapLoop(numbers, double);

console.log(doubledNumbers);
// [2, 4, 6, 8]
```

You can see what your function does by running

```bash
yarn start
```

and run the tests with

```bash
yarn test
```
