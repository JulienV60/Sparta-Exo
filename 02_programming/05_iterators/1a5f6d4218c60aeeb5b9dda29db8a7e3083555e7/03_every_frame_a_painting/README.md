# Every frame a painting

## Context and objectives

We want to make an art gallery but we have a very specific client that only want to see paintings.
We need to make sure that **every** object we take is of the right type.

## Specs

In the `src/index.js`, write a function `canTakeArtPieces` that will receive a list of object as input and return a boolean depending on if every element has a property `type` equals to `"painting"`.

```js
canTakeArtPieces([
  {piece: "Mona Lisa", type: "painting"},
  {piece: "Guernica", type: "painting"}
]);
// -> true

canTakeArtPieces([
  {piece: "The Thinker", type: "statue"},
  {piece: "Guernica", type: "painting"}
]);
// -> false
```

## Hint

There are several ways of doing this but one of the [method of Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) checks _every_ boxes.
