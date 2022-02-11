# Warmup: Find digit

## Context and objectives

In this exercise, you have to find if a given digit is present in a list of numbers.

## Specs

Create a **`findDigit`** function that takes as parameters _an array of numbers_ and _a digit_ to find, and which will return _an array_ with the numbers that will contain the digit; otherwise, it will return an empty array.

```typescript
const anArrayOfNumbers: number[] = [1, 92, 824];
findDigit(anArrayOfNumbers, 2); //return [92, 824]
findDigit(anArrayOfNumbers, 3); //return []
```

**Don't forget to export your function.**

> **Eslint will block you if you don't give a function return type or arguments types**
