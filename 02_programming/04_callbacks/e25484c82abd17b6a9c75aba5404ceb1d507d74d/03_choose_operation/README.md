# Choose your operation

## Context and Objectives

Now we discovered algorithms, let's do some more to build your algorithm muscles!!

## Specs

Your task is to do, in the `src/chooseOperation.js` file, an arithemtic operation on two numbers via a `chooseOperation` function, which will take **2 integers** and **a function which will perform the operation**, it's a kind of selection for what you want to perform on your numbers.

The third parameter is one of your old friends, the "arithmetic operators". Write **four different functions** (addition, substraction, multiplication and division).

For example, if we run the function with `9`, `12` and your `addition` function, `21` will come out.
Antoher example: if we run the function with `9`, `12` and your `substraction` function, `-3` will come out.
And so on!

Note: The function `chooseOperation` must **only** accept an integer for both your first and second parameters, and a function for your third parameter, then returns a number.
It should **throw an error** when provided with something different than expected in the parameters types.

## Tests

Run `yarn test` to test your code.
You can also run your code with `yarn start` or `node src/index.js`.

> PS: Don't forget to use prettier to help formating 😉
