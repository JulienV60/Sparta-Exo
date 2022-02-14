# Warmup: Lottery draw checker

## CONTEXT AND OBJECTIVES

You are asked to create a function that compares a simplified lottery ticket (an `array` of 3 numbers, between 0 and 3 included) and tells you if you have won the lottery or not!

## SPECS

Code the function `lottery_draw` in `src/lottery_draw.ts`, it should:
- It takes no parameter.
- It returns a type `Draw`, which is an array of 3 numbers
  - Every number of the array should have a value between 0 and 3 (included)

The function you need to code is in `src/check.ts`.

Write a function with the following specifications:

- It takes a parameter of type `Draw` which is an array of 3 numbers.
- It doesn't return anything.
- It generates a random array with the function `lottery_draw`.
- If the parameter and the random array have the same numbers **in the exact same order**:
  - Console log "You won the lottery!".
- Else :
  - Console log "You lost...".

## EXAMPLES

```js
checkIfIWon([1, 1, 1])
// If you win, it console logs "You won the lottery!"
// If you loose, it console logs "You lost..."
```

You can use `yarn start` to check that you have the right result:

```shell-session
$ yarn start
```

Note that the win will not happen that often.
