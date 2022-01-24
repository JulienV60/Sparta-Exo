# Arrays into Objects (warmup)

## Context and objectives

In this exercise, you have to write a function that takes 2 arrays and that returns an object out of the two arrays.

### Specs

The function `arraysIntoObjects` takes two arrays of the same size as parameter. The first arrays is the keys of the object, and the second array is the values of the object.

Even if the two parameters are empty arrays, the function should return an array.

### Example

```js
function(["nom", "prenom", "age"], ["Capitaine", "Haddock", 55])
/* Should return:

{
  nom: "Capitaine",
  prenom: "Haddock",
  age: 55
}
*/
```
