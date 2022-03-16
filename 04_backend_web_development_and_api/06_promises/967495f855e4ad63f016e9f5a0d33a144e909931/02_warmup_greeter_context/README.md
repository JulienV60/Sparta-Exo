# Warmup: Greeter (context)

## CONTEXT AND OBJECTIVES

Make a function that executes functions for you.

## SPECS

The function you need to code is in `src/context.ts`. You need to copy your function `greetEveryone` from exercise one in the file `src/greetEveryone.ts`.

Write a function `context` with the following specifications:

- It takes two parameters:
  - a callback function of type `CallbackType` that we provide you.
  - a list strings of type `ParamRest` that we provide you.
- It does not return anything.
- The function :
  - consoles logs the sentence `"We now greet: "`.
  - then it executes the callback and gives it the element of the list as parameters.

## EXAMPLES

```js
context(greetEveryone, ["Tom-Tom", "Nana"]) // Should print :
// We now greet:
// Welcome to Tom-Tom
// Welcome to Nana
```

We provide you an `index.ts` file with two calls of your function with `greetEveryone` and `["Dupont", "Dupond"]` as an argument, so you can use `yarn start` to check that you have the right result:

```shell-session
$ yarn start # should print
We now greet:

Welcome to Dupont
Welcome to Dupond
```
