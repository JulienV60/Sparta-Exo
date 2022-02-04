# Random Mock

## Context and Objectives

In this exercise, we have a `getRandomUser` function that work like this:

```typescript
getRandomUser(["Frieda", "Francis", "Frederic"]);
//it should return a random user from the provided array
//i.e. "Frieda" | "Francis" | "Frederic"
```

Rather than restarting the function an indefinite number of times until we can check if all output possibles are returned, let's use a `mock` here to check each index of an array!

## Coverage

You should aim for complete validation of any array length here.

## Hint

> Because we can't know in advance what the array length can be, you need to find the right value to give to `spy.mockImplementation(() => ?`.
