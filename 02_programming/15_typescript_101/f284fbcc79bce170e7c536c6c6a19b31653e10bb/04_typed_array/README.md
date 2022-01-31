# Typing arrays

## Context and objectives

We already type an array in the first exercise of the day, let's type some more using **type aliases**!

## Specs

Using **type aliases**, complete each different type in `src/index.ts`: replace `unknown` types by adequate ones that the given arrays are valid (some may sound familiar 😁):

  - `batchTeachersList` may contain any number of teachers' names
  - `exerciseYarnTestResults` only contains `true` or `false` values but the number of tests may vary from one test to another
  - `myResultsBulletin` contains five tests results; if absent, it will be marked as `"ABS"`.
  - `pairsListClass` contains several pairs of students, all together in a list: they always be by pairs but the number of students may vary from one class to another

> Use `yarn test` to have some hints to help you during the development.
