# Orange tree part II

## Context and objectives

Now that we have our `Tree` blueprint, it's time to dive into the implementation of the `OrangeTree` class!

The goal of this part is to build an `OrangeTree` class by _extending_ the `Tree` class, and implement all the "business" logic.

## Specs

First, copy back your `Tree` class from the previous exercise in `src/index.ts`.

Here is a more detailed overview of what you must achieve with your orange tree:

**Attributes:**

- `age` (in year).
- `height` (in cm).
- `alive`.
- `oranges`: an array of oranges (you must use this emoji 🍊 in your code to pass the tests).

**Methods:**

- `ageOneYear`, has 3 main jobs:

  - it increments the `age` property by 1,
  - it increases the height, following these specs:
    - 25 centimeters per year, from 1 to 9 years old (included).
    - 10 centimeters per year, from 10 to 20 years old (included).
    - It should stop growing after 20 years old.
  - it grows oranges. the method `growOranges` has to be called.

- `isAlive`, used to compute if the tree dies or not, based on the following specs:

  - it cannot die before 50 years old.
  - it cannot live longer than 100 years old.
  - each year, starting from 50 years old, the chance of the tree dying increases.

> **Note** : The probability of the tree being alive needs to decrease for every year it gets older.

- `seed` used to

  - set `age` and `height` to 0
  - set `alive` to `true`.

- `growOranges`, increments oranges (🍊), based on the following specs:

  - 0 oranges (🍊) each year, from 0 to 4 years old (included).
  - 10 oranges (🍊) each year, from 5 to 10 years old (included).
  - 20 oranges (🍊) each year, from 11 to 20 years old (included).
  - 5 oranges (🍊) each year, from 21 to 40 years old (included).

> **Note** : `growOranges` is used in the method `ageOneYear`, so it grows only one year of oranges everytime it is called.

- `pickAnOrange`, used to remove one orange (🍊) from `oranges`.

⚠️ If you need more details, feel free to run the tests.

As the owner of the tree, you should be able to:

- get its age.
- get its height.
- find if it is still alive.

## Launch and Tests

You can use the `src/index.ts` file to help you test manually your `OrangeTree` class, by creating a `while` loop to display the life of the tree for example.
You can run this file with `yarn start`.
