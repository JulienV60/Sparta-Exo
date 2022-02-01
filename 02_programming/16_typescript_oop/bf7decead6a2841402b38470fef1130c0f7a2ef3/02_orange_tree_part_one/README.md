# Orange tree part I

## Context and objectives

One of the best and most given exercise used to learn how to illustrate the OOP concept is the Orange Tree.

The initial goal of this canonical exercise is to represent, with a single JavaScript Object, the whole life of an orange tree, from its birth to its death.

We'll push the concept further, by adding the tools TypeScript gives us access to.

## Overview

Here is a basic overview of what we want to do with our orange tree at the **end of the day**, not just for the part I.

It must:

- age each year.
- grow each year.
- produce oranges (🍊) based on its age, and remove unpicked ones.
- live a minimum of 50 years, and a max of 100 years.
- seed and make a new tree.

You must be able to:

- get its age.
- get its height.
- find if it is still alive.
- pick up an orange (🍊).

## Specs

Before starting to implement any logic, we are going to start by creating a class called `Tree`. This will be your blueprint to make all kinds of trees (but in our case, an orange tree).

The class `Tree` should have the following attributes:

- `age` (in year).
- `height` (in cm).
- `alive`.

The **constructor** should initialise a new tree with the given age (and **only** the age!), but the height should be computed. It is relative to the age given, based on the following specs:

- 25 centimeters per year, from 1 to 9 years old (included).
- 10 centimeters per year, from 10 to 20 years old (included).
- It should stop growing after 20 years old.

> For example :
>
> - After initializing a 12-year-old tree, it should have a height => `(9*25) + (3*10) = 255 cm`
> - After initializing a 20-year-old tree, it should have a height => `225 cm from 0-9 years old + 110 cm from 10-20 years old => 335cm`

Finally, we want a classic method called `seed`, used to set `age` and `height` to 0, and `alive` to `true`.
