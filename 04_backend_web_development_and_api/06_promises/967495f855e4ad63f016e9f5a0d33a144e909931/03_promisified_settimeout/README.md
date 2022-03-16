# Promisified setTimeout

## Context and objectives

You may remember the function `setTimeout`, it works like this:

```typescript
setTimeout(() => {
  console.log("this will be printed after 2 seconds");
}, 2000);
```

## Specs

You need to create a function `waitFor` in `src/index.ts` that takes a number of milliseconds as input and that returns a `Promise<void>`.

This Promise should be resolved when the timeout is finished:

```typescript
waitFor(2000).then(() => {
  console.log("This will be printed after 2 seconds");
});
```
