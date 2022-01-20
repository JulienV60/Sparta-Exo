# Chaining

## Context and Objectives

A useful property derived from `this` is the ability to chain function calls.

If you create an object with a function that returns `this`, you effectively return the whole object.

You can then reuse the same function (or any other present in the object).

```javascript
const greeter = {
  greet: function (name) {
    console.log(`hello ${name}!`);
    return this;
  },
};

greeter.greet("Joe").greet("Mike").greet("Robert");
// Hello Joe!
// Hello Mike!
// Hello Robert!
```

## Specs

Complete the `car` object in `src/car.js` with four functions:

- **`start()`** will reset all the car's data.
- **`changeSpeed(speed)`** will change the km/h speed of the car.
- **`drive(minutes)`** will make your car drive at the previously set speed for that amount of time (in minutes).
- **`showDistance()`** will print the distance you drove as the number of kilometers.

> Note that `changeSpeed` doesn't actually make the car drive, it simply changes the value of the car's current speed!

Take care of storing the data inside the car itself!
Here are some example of how your car should behave:

```javascript
car.start().changeSpeed(130).drive(42).showDistance();
// should display "91 Km".

car.start().drive(42).changeSpeed(130).showDistance();
// should display "0 Km".

car.start().drive(42).changeSpeed(130).drive(42).showDistance();
// should display "91 Km".

car.start().changeSpeed(130).drive(42).changeSpeed(10).drive(60).showDistance();
// should display "101 Km".

car.start().changeSpeed(130).drive(42).start().changeSpeed(10).drive(60).showDistance();
// should display "10 Km".
```

## Testing

As usual, run the tests with `yarn test` and feel free to play with your code in the `src/index.js`
