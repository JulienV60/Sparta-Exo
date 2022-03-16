# Default parameters

## Context and objectives

Sometimes, you will need to prepare a value by default if a user does not provide it to your program. There comes defaults parameters, which are values initialized if no value or `undefined` is passed as arguments.

## Specs

Write a function `helloSpartan` that takes **one string** as _input parameters_, and _logs_ a **string** containing a short sentence with this parameter, depending on the argument passed to your function:

E.g.

```javascript
helloSpartan("Francis");
// => "Hello Francis: glad to know your name!"

helloSpartan();
// => "Hello soldier; not very talkative uh?"
```

But what happens when you call your function with `helloSpartan("soldier")`? Try it to find out! 😏

You can see what your function does by running

```shell
yarn start
```

and run the tests with

```shell
yarn test
```
