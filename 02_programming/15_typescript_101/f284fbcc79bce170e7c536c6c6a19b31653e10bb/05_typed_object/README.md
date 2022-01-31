# Typing objects

## Context and objectives

Similar to typed arrays, let's type objects with a twist!

If you never played trading cards games (Magic the Gathering, Yu-Gi-Oh, ...), just know that every card of a given game has characteristics in common like a name, a rarity, etc... to have consistency between all cards.

## Specs

Using the **type alias**, complete `CardType` type in `src/index.ts`.

We provide you with some cards (represented as objects) with these characteristics to help you write a `CardType` alias type:
  - a name
  - a type of card
  - a cost to play it
  - damages the card can deals (some cards don't deal any damage at all but still have this entry)
  - a rarity rate (a card can be rare or not)

Here's a card with these characteristics:

```typescript
const card1 = {
  name: "Blue Knight",
  type: "Creature",
  cost: 3,
  damage: Math.floor(Math.random() * 15 + 1),
  rare: false,
};
```

As you may have noticed, every card has the same characteristics as another but they may have different values (keys/values).

> Use `yarn test` to have some hints to help you during the development.
