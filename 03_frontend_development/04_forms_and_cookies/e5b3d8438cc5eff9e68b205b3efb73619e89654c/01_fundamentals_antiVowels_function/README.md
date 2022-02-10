# Fundamentals: Anti-Vowels (function)

## CONTEXT AND OBJECTIVES

You are asked to create two functions that manipulates strings. The first one, `sentenceSplitter`, divides a sentence into an array containing every word of the sentence. The second one, `sentenceJoiner`, takes an array of words and joins them into a sentence.

The goal is that a sentence that goes through the function `sentenceSplitter` and it's result through `sentenceJoiner`, goes out unchanged such that:

```js
sentenceJoiner(sentenceSplitter("This is a sentence ")) === "This is a sentence" // returns `true`
```

## SPECS

### sentenceSplitter

The function you need to code is in `src/sentenceSplitter.ts`.

With the following specifications:

- It takes a parameter of type `string` which is a sentence.
- It returns an array of `string`s, composed of every word of the sentence.

### sentenceJoiner

The function you need to code is in `src/sentenceJoiner.ts`.

With the following specifications:

- It takes a parameter of type `string[]` which is an array of words.
- It returns a `string`, which should be the sentence composed of the all words from the array passed as an argument.

## EXAMPLES

```js
console.log(sentenceSplitter("This is a sentence")) // returns ["This", "is", "a", "sentence"]
console.log(sentenceJoiner(["This", "is", "a", "sentence"])) // returns "This is a sentence"
```

We provide you with an `index.ts` file which will `console.log` 3 calls made to the functions you need to write:


`sentence === sentenceJoiner(sentenceSplitter(sentence))`

`sentenceSplitter("Do or do not.")`

`sentenceJoiner(["There", "is", "no", "try."])`

You can use `yarn start` to check that you have the expected result:

```shell-session
$ yarn start # should print
true
["Do", "or", "do", "not."]
There is no try.
```
