# Chuck Norris API with Promises

## Context and objectives

In this exercise, you'll have to call the Chuck Norris functions we prepared for you, you must use the promises and `.then()`, as you saw in the morning lesson.

## Specs

Implement the two following functions:
In the `src/chuck.ts` file:

**`getCategories()`**

- Must not use a parameter.
- Return a promise with an array of strings, those strings being your categories.

**`getJoke()`**

- Use a `category` parameter, which is a `string` representing the selected category (e.g. `"dev"`, `"animal"`, ...).
- Return a promise with only a string, this string being the joke.

### Tips

⚠️⚠️ Don't use `catch` in your functions as we will handle errors in the `src/index.ts` file. ⚠️⚠️

You can use `yarn test` to help you during the development.

You can comment/uncomment stuffs in `src/index.ts` to test with `yarn start`.
