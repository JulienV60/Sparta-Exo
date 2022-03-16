# Fortune Teller

## Context and objectives

As you probably noticed during the course, the greatest usefulness of a function is to be able to reuse a block of code that will adapt to the values given to it. As long as you know what to expect as the type of values; let's then make some interpolations!

## Specs

Write a function `tellFortune` that takes **three strings and one number** as _input parameters_, and _logs_ a **string** containg and a short sentence with these parameters.
Your parameters should be:
  - a job
  - a city
  - a name
  - a number of years

The result should be : `"You will be X in Y, and married to Z in N years."`

E.g.

```javascript
tellFortune("web developer", "Lille", "Frieda", 2);
// => "You will be web developer in Lille, and married to Frieda in 2 years."

tellFortune("the very best", "Pallet Town", "Misty", 3);
// => "You will be the very best in Pallet Town, and married to Misty in 3 years."
```

You can see what your function does by running

```shell
yarn start
```

and run the tests with

```shell
yarn test
```
