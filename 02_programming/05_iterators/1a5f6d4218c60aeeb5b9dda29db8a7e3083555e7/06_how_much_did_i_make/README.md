# How much did I make?

## Context and objectives

Following the previous exercise, we now want to know the amount of tips we got from the invoices.

Because, knowing the list of tips is great, but what we really want to know is how much we made!

## Specs

In the `src/index.js`, write another function `howMuchDidIMake` that will take a list of invoices as input that will do the same as the previous one but instead of returning an array of tips, it should return the sum of all the tips.

```js
const invoices = [
  { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
  { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
];

howMuchDidIMake(invoices);
// -> 300
```
