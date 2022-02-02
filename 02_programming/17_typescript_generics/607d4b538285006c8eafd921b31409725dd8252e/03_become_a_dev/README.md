# Become a dev

## Context and objectives

You can see this exercise like Sparta.. It takes humans and transform them as developpers (it's like a human, but better 😎)

## Overview

Let's make a `Human` type, that contains:

- `name` that is a `string`
- `age` that is a `number`
- `knowsDev` that is a `boolean`

Then, we create a new `Dev` type that contain:

- `Human` and `knownLanguage` that is a string. ⚠️ You must use an `intersection type` ⚠️. If you don't remember what it is.. You can have a look in the [Typescript 101](https://sparta.fewlines.tech/today/camp2/02_programming/15_typescript_101#type-alias) course.

Finally, we need to do a function called `becomeADev` that takes a `Human` typed `object` as a parameter and returns a `Dev` object.
This returned object should have the values from the parameter but `knowsDev` is now `true` (if it was not) and `knownLanguage` has the value of `"JavaScript"`.

Enjoy 😎
