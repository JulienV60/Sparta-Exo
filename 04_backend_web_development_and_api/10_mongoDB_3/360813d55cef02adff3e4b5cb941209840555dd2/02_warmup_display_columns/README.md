# Warmup: Display columns

## Context and objectives

Create a function that can make a column of characters.

## Specs

In the `src/column.ts`, using a `for` loop, complete the function that takes a number and a character as parameters and returns a string with that number of lines composed of this character.

Hint: a new line is a character and can be written `\n`, you can try what `console.log("hello" + "\n" + "world")` does.

You can use `yarn start` to launch examples in the `src/index.ts` file once you've coded your function.

Here are some usage examples:

```ts
column(5, "*");
// returns:
// *
// *
// *
// *
// *

column(2, "%");
// returns:
// %
// %
```
