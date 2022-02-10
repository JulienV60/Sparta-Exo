# Fundamentals: Anti-Vowels (context)

## CONTEXT AND OBJECTIVES

You are asked to create a function `context` that filters and removes every word that starts with a vowel in a sentence. The idea is to use the two functions `sentenceSplitter` and `sentenceJoiner` to help you with that.
Split the input sentence into an array of words, on which you will be able to use a loop function to be able to filter and remove every word that starts with a vowel.
Once this is done, you can join this new array to re-form a sentence.

Do not hesitate to use existing methods such as **[filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)**.

## SPECS

The function you need to code is in `src/context.ts`.

With the following specifications:

- It takes a parameter of type `string` which is a sentence.
- It returns a `string`, which is the input sentence where every word starting with a vowel has disappeared.
- It must use the functions `sentenceSplitter` and `sentenceJoiner` to help you filter the sentence.

## EXAMPLES

```js
context("This is a sentence") // returns "This sentence"
```

We provide you an `index.ts` file which `console.log` a call of your function `context` with the value `"Can I be excused for the rest of my life?"`, so you can use `yarn start` to check that you have the right result:

```shell-session
$ yarn start # should print
Can be for the rest my life?
```
