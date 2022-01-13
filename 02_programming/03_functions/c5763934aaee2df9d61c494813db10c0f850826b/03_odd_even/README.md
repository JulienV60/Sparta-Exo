# Odd/Even Function

## Context and objectives

Verifying if a number is odd or even may be boring unless we make it fancier by customizing the return of the verification 😎

## Specs

Write a function `oddEven` that takes **an integer** as _input parameter_ and _returns_ a **string** containing a short sentence with this integer and specifing if it is odd or even:
  - for odd numbers -> `"<argument> is an odd number."`
  - for even numbers -> `"<argument> is an even number."`

If the given argument is not an [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), the function will _logs_ `"<argument> is not a number."`; test it out to know what can be passed in your function.

E.g.

```javascript
const oddNumber = oddEven(3);
// => "3 is an odd number."

const evenNumber = oddEven(6);
// => "6 is an even number."

const notANumber = oddEven("two");
// => "two is not a number."
```

You can see what your function does by running

```shell
yarn start
```

and run the tests with

```shell
yarn test
```
