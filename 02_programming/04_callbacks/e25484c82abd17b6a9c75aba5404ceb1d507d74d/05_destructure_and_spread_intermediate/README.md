# Destructure and spread : advanced

## Context and Objectives

Destructuring and spread operators are common when coding with Javascript and it is important to understand how to use them.
In this exercise, you'll practice with some arrays to spread and destructure.

## Write "Prettier" code

Same as in the previous exercises, don't forget to use Prettier to help you format the code!

## Specs

A company just had a huge storage glitch and they now need your help to reformat it so they can work again.

In the `src/index.js` file, write a `formatStorage` function that takes an `array` as a parameter and returns a formatted array.

It should look like this:

```javascript
let storageHell = [
  [],
  ["IPad", "IPhone"],
  ["GameBoy color"],
  ["Nes", "Donkey kong 64"],
  ["Apex Legends Starter Pack", "LG 5K 27p screen"],
  ["Coffee Machine", "Azelad"],
];

const formattedStorage = formatStorage(storageHell);

// formattedArray should look like this :
[
  'IPad',
  'IPhone',
  'GameBoy color',
  'Nes',
  'Donkey kong 64',
  'Apex Legends Starter Pack',
  'LG 5K 27p screen',
  'Coffee Machine',
  'Azelad'
]
```

⚠️ You don't always have to code the entire functions in this exercise. You'll get some guidelines in the files like:

```javascript
/** Complete here */
// Code here
```

## Tests

You can run `yarn test` at any time to test your code.

Feel also free to add some `console.log()` in the `src/index.js` file to check the result of your code.
