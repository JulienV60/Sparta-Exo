# Map Reduce Sandwich (Bonus)

## Context and objectives

Map and Reduce are often used hand in hand and a common story among developpers is the map-reduce-sandwich.

Here's what we want to do:

![map reduce sandwich](./assets/map-reduce-sandwich.png)

## Specs

You will need to do two functions.

One function `slice` will take an array of ingredients as input and return a new array with each ingredients "slices" like this:

```js
slice(["ham", "lettuce", "tomato"]);
// -> ["sliced ham", "sliced lettuce", "sliced tomato"]
```

A second function `makeSandwich` that only takes an array of slices ingredients and return a string with a description of the sandwich and its ingredients:

```js
makeSandwich(["sliced ham", "sliced lettuce", "sliced tomato"]);
// -> A tasty sandwich made of ham, lettuce, tomato
```

If one of the ingredient is not slices, it should return another string:

```js
makeSandwich(["sliced ham", "lettuce", "sliced tomato"]);
// -> I can't make a sandwich with non-sliced ingredients
```
