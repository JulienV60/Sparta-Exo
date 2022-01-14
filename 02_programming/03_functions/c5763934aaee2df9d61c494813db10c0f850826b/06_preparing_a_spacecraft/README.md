# Preparing a spacecraft

## Context and objectives

Who does not want to go to Space? 😎 Then let's prepare and check if our spacecraft is ready to fly!

## Specs

Write two functions :
  -`checkFuelLevel` that takes **an integer** as _input parameter_, and _returns_ **a string** depending on the fuel level:
    - if the fuel level is higher than 20, it's "green"
    - if it is higher than 10, it's "yellow"
    - else, it's "red"

  E.g.

  ```javascript
  const fullFuelLevel = checkFuelLevel(30); // => Fuel level: green

  const mediumFuelLevel = checkFuelLevel(12); // => Fuel level: yellow

  const lowFuelLevel = checkFuelLevel(1); // => Fuel level: red
  ```

  -`checkCargoHold` that takes **an array** as _input parameter_, and _returns_ **a string** depending on the space remaining:
    - if the cargo contains four items, you are full
    - if it is less than four items, you need to calculate the space remaining
    - if it excess four items, your need to calculate how many item you need to get rid of

  E.g.

  ```javascript
  const fullCargo = checkCargoHold([<4 items>]); // => Full

  const spaciousCargo = checkCargoHold(<2 items>); // => `Spaces available: 2`

  const overfullCargo = checkCargoHold(<8 items>); // => `Over capacity by 4 items.`
  ```

You can see what your function does by running

```shell
yarn start
```

and run the tests with

```shell
yarn test
```
