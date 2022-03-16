# Odd/Even Function

## Context and objectives

Verifying if an integer is odd or even may be boring unless we make it fancier by customizing the return of the verification 😎

## Specs

Write a function `oddEven` that takes **an integer** as _input parameter_ and _returns_ a **string** containing a short sentence with this integer and specifing if it is odd or even:
  - for odd integers -> `"<argument> is an odd integer."`
  - for even integers -> `"<argument> is an even integer."`

If the given argument is not an [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), the function will _logs_ `"<argument> is not an integer."`; test it out to know what can be passed in your function. Take a closer look at the differences between a number and an integer!

E.g.

```javascript
const oddNumber = oddEven(3);
// => "3 is an odd integer."

const evenNumber = oddEven(6);
// => "6 is an even integer."

const notANumber = oddEven("two");
// => "two is not a integer."
```

You can see what your function does by running

```shell
yarn start
```

and run the tests with

```shell
yarn test
```
