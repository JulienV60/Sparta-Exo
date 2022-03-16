# Github Client

## Context and objectives

In this exercise you have to code what we call a "client".
This Github client will be use to get data about a user and its repositories from the github functions we provide you.

## Specs

In the `src/github-client.ts` file, we provide you the `Repo` and `GitHub` types you'll need for your client's functions. Use them when you need to type function parameters or return types.

### `getReposUrl`

- Must take a `nickname` string parameter: this is the user we want to search for.
- Must return a `Promise<string>`: the url of the requested user's repositories.
- Must **throw** an understandable error when the user does not exist. (feel free to check what you're receiving from the API when the user doesn't exist)

### `getRepos`

- Must take a `url` string parameter.
- Must return an array of repositories.

### `getProjectInformations`

- Must take a `url` string parameter.
- Must return the repository's data.

### `printRepos`

- Must take an array of repos as a parameter.
- Must use `console.log` to print repos in the following format:
  - 1 - nameOfTheFirstRepo
  - 2 - nameOfTheSecondRepo
  - 3 - nameOfTheThirdRepo
  - ...
- Must return the array of repos

### `printRepository`

- Must take a repository as a parameter.
- Must use `console.log` to print the following repository's information:
  - Repository's name
  - Repository's description
  - Repository's subscribers
  - Repository's stars
  - Repository's language
  - Repository's url

## Tests

Run `yarn test` to test your code.

You also have examples of how this client could be used in the `src/index.ts` file. Feel free to play with it if you want to manually test your functions. You can launch it with `yarn start`. (but remember to uncomment the examples if you want to use them)
