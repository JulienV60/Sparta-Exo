# Destructure and spread : beginner

## Context and Objectives

Destructuring and spread operators are common when coding with Javascript and it is important to understand how to use them.
In this exercise, you'll practice with some arrays and objects to spread and destructure.

## Write "Prettier" code

Same as in the previous exercises, don't forget to use Prettier to help you format the code!

## Specs

⚠️ You don't always have to code the entire functions in this exercise. You'll get some guidelines in the files like:

```javascript
/* Complete here */
// Code here
```

### Objects

Code in the `src/index.js` file.

Help this student to become a developer, using the spread operator between the student and his knowledge.

```javascript
let student = {
  hasComputer: true,
  knowsTypescript: false,
  knowsReact: false,
  knowsNext: false,
  knowsMongoDB: false,
  timeSpent: "4 days",
};

let knowledge = {
  knowsJavascript: true,
  knowsTypescript: true,
  knowsReact: true,
  knowsNext: true,
  knowsMongoDB: true,
  timeSpent: "10 weeks",
};

let developer = {
  // give more knowledge to the student
}

// developer final value should be:
{
  hasComputer: true,
  knowsJavascript: true,
  knowsTypescript: true,
  knowsReact: true,
  knowsNext: true,
  knowsMongoDB: true,
  timeSpent: "10 weeks",
};
```

### Arrays

Code in the `src/index.js` file.

Now that he is a developer, our student works on an application and has noticed that there was a bug implemented at the begining. Help him remove that bug with the array destructuring method.

```javascript
let application = ["bug", "code", "code", "code", "code", "code", "code", "code", "code"];
console.log(bug); // => "bug"
console.log(code); // => ["code", "code", "code", "code", "code", "code", "code", "code"]
```

## Tests

You can run `yarn test` at any time to test your code.

Feel also free to play with your code in the `src/index.js` file, by adding some `console.log` and running `yarn start`.
