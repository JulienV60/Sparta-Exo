# Recursion

## Context and Objectives

In the same spirit of the last exercise, the goal here is to hone your skills, but this time on recursions.

## Specs

Your task is to implement a function `findPosition` tn the `src/recursion.js` file, that verifies the position of each person in an array in `src/index.js` and returns the position of a given person when found, so you will have to repeat these checks, to call the function several times.

Your function takes **an array of strings** (a list of persons), **a string** (the person you want to find), **an integer as a counter** to keep track of where you have already iterated in your array and returns **a string** with its position when found.

For example:

```javascript
const myArray = ["Alpha", "Beta", "Delta"];
findPosition(myArray, "Delta", 0);
// should return "Delta is at position #3 in this array."
```

⚠️ Your function will be called for each person of your array, it needs to know when to stop (because it means that you haven't found the person) and returns this string:

```javascript
const myArray = ["Alpha", "Beta", "Delta"];
findPosition(myArray, "Omega", 0);
// should return "Omega is not present in this array."
```

**Note**

The function `findPosition` must **only** accept their expected types. It should throw an error when provided with something different.

Remember `03_choose_operation`? 😎

Good luck!
