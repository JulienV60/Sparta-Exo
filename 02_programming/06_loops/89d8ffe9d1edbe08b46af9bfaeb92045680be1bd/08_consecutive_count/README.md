# Consecutive count

## Context and objectives

This time, we don't want to simply count something, we want to know the bigger number of occurences of the things.

## Specs

In the `src/index.js`, write a function `consecutiveCount` that takes a string and a character as input and returns how many times this character has been repeated consecutively at most.

E.g.

```javascript
consecutiveCount("aaabcaaba", "a"); // 3 (longest streak of `a` is `aaa`)
consecutiveCount("utuutuuuuutuu", "u"); // 5 (longuest streak of `u` is `uuuuu`)
consecutiveCount("azerty", "b"); // 0
```

You can see what your function does by running

```bash
yarn start
```

and run the tests with

```bash
yarn test
```
