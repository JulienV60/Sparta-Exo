# Fundamentals: Square (context)

## CONTEXT AND OBJECTIVES

You are asked to transform an array of numbers by squaring each of its values.

You must use the function `squareNumber` you did in the previous exercise.

## SPECS

The function `context` you need to code is in `src/context.ts`.

The function must go through the array and square each of its values.
It follows those specifications:

- The function takes a parameter which is an array of numbers.
- The function returns an `array of numbers` where each value is the squared result of the original value in the input array.
- The function must use `squareNumber` to square each value.

## EXAMPLES

```js
context([0, 12, 5]) // returns [0, 144, 25]
```

We provide you an `index.ts` file which `console.log` a call of your function with `[1, 5, 10, 15]` as an argument, so you can use `yarn start` to check that you have the right result:

```shell-session
$ yarn start # should print
[1, 25, 100, 225]
```
