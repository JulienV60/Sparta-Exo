# Warmup: Greeter (function)

## CONTEXT AND OBJECTIVES

Make a function that greets everyone. The interesting thing here is that the function `greetEveryone` can take any amount of string parameters.

You should give this [MDN page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) about `rest` a read.

## SPECS

The function you need to code is in `src/greetEveryone.ts`.

Write a function `greetEveryone` with the following specifications:

- It takes one `rest` parameter of `ParamRest` type that we provide you (which is an array of strings).
- It does not return anything.
- For each element in the parameter, it greets it in the following format:
  - `"Welcome to <parameterElement>"`

## EXAMPLES

```js
greetEveryone("Tom", "Jerry") // Should print : 
// Welcome to Tom
// Welcome to Jerry
```

We provide you an `index.ts` file with two calls of your function with `"Riri", "Fifi", "Loulou"` and `"Dupont", "Dupond"` as an argument, so you can use `yarn start` to check that you have the right result:

```shell-session
$ yarn start # should print
Welcome to Riri
Welcome to Fifi
Welcome to Loulou
Welcome to Dupont
Welcome to Dupond
```
