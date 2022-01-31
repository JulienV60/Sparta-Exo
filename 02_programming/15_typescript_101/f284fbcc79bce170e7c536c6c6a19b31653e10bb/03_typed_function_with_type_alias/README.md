# Typing functions (type alias)

## Context and objectives

In the previous exercise, we typed a function directly in it. For this one, let's do the same but use a type alias for parameters!

## Specs

Create a function `handleTuple` with a `tuple` parameter that should have a string at index 0, and a number at index 1 and that prints two different outputs with `console.log`, based on the type of each index.

The value of each item should be present at the _start_ of the string, in their respective `console.log()`.

```typescript
handleTuple(["foo", 42])
// wiil print:
// foo is a string
// 42 is a number
```

**Remember to use a type alias for the tuple parameter** or your tests will fail. 🤭

- You can use `yarn test` to help you during the development.

- When you're happy with your work, try it with `yarn start`. **Don't forget to call your function to get the output in your terminal**.
