# Fundamentals: Capitalize (context)

## CONTEXT AND OBJECTIVES

You are asked to transform a sentence by capitalizing every word in it.

You must use the function `capitalize` you did in the first part of the exercise.

## SPECS

The function `context` you need to code is in `src/context.ts`.

The function must apply on the whole string sentence, taking the first character of every word and turning it into a capital letter.

It follows those specifications:

- The function takes a sentence as a parameter (`string`).
- The function returns the sentence where now each word has a capital letter.
- The function must use the function `capitalize` once per word to make the first letter capital.

## EXAMPLES

```js
context("you know nothing john snow.") // returns "You Know Nothing John Snow." 
```

We provide you an `index.ts` file which `console.log` two calls of your function with `james pond` and `My name is pond, james pond. Underwater agent.` as an argument, so you can use `yarn start` to check that you have the right result:

```shell-session
$ yarn start # should print
"James Pond"
"My Name Is Pond, James Pond. Underwater Agent."
```
