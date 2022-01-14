# Checking a spacecraft

## Context and objectives

Good news: a Sensor room has just been installed on the spacecraft! It can now remotely check the fuel level and cargo of other spacecrafts. As long as it stays far enough away, it's stealthy ... and we remain anonymous. However let's add a twist and do **arrow functions**!

## Specs

Because all of the surrounding spaceships are the same, you should have the same results returned as with your two functions from the previous exercise `06_preparing_a_spacecraft/src/index.js`.

Write two **anonymous functions** :
  -`stealthyFuelLevelCheck` that still takes **an integer** as _input parameter_, and _returns_ **a string** depending on the fuel level:
    - if the fuel level is higher than 20, it's "green"
    - if it is higher than 10, it's "yellow"
    - else, it's "red"

  E.g.

  ```javascript
  stealthyFuelLevelCheck(28); // => Fuel level: green

  stealthyFuelLevelCheck(11); // => Fuel level: yellow

  stealthyFuelLevelCheck(3); // => Fuel level: red
  ```

  -`stealthyCargoHoldCheck` that still takes **an array** as _input parameter_, and _returns_ **a string** depending on the space remaining:
    - if the cargo contains four items, it is full
    - if it is less than four items, you need to calculate the space remaining
    - if it excess four items, your need to calculate how many item it needs to get rid of

  E.g.

  ```javascript
  stealthyCargoHoldCheck([<4 items>]); // => Full

  stealthyCargoHoldCheck([<2 items>]); // => `Spaces available: 2`

  stealthyCargoHoldCheck([<8 items>]); // => `Over capacity by 4 items.`
  ```

You can see what your function does by running

```shell
yarn start
```

and run the tests with

```shell
yarn test
```
