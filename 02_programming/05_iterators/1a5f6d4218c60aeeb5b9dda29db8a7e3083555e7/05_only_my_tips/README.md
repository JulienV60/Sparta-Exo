# Only my tips

## Context and objectives

A restaurant, at the end of a day has a list of invoices.
However, you are a waiter or waitress and you're only interested in the tips that you got this day.

Fortunately, for each meal, you have the information about who served the meal and how much has been tipped.
You can then make a function that will only return the tips.

## Specs

In the `src/index.js`, write a function `onlyMyTips` that will take a list of invoices as input:

```js
const invoices = [
  { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
  { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
];
```

You only want the invoices where the `waiter` is `Yourself` and only the tips.
In the end, the function should return something like:

```js
[200, 100]
```

For the rest, you know the drill.
