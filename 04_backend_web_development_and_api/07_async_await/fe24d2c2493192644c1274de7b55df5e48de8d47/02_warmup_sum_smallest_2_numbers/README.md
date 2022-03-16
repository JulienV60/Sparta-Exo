# Warmup: Sum of the smallest 2 numbers

## Context and objectives

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.

You can assume no floats or non-positive integers will be passed.

## Specs

Export a function named `sumTwoSmallestNumbers` that takes an array of numbers and returns the sum of the two lowest positive numbers.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7 because 5 and 2 are the lowest numbers of the list.

## Bonus

This is optional but if you run your tests with `yarn bonus-test` you now have 2 additionnal requirements:

- the function should throw if there are less than 4 numbers.
- the function should throw if there are non-positive numbers.
