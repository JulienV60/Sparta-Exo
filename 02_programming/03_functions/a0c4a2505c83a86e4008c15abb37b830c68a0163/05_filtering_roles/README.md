# Filtering by roles

## Context and objectives

Let's put together several elements from the previous exercises to filter an array of people according to their roles!

## Specs

Write a function `filteredRoles` that takes **an array of persons** and **a string specifing a role** with **a default parameter "Teacher"** as _input parameters_, and _return_ **an array** with the persons from the specified role:

Your array will hold four objects, each of them with have a name and a role (either "Student" or "Teacher").

E.g.

```javascript
const myFilteredArray = filteredRoles(persons, "role1");
/*
mySortedArray = [
  {
    name: "name1",
    role: "role1",
  },
  {
    name: "name2",
    role: "role1",
  },
  ...
];
*/
```

You can see what your function does by running

```shell
yarn start
```

and run the tests with

```shell
yarn test
```
