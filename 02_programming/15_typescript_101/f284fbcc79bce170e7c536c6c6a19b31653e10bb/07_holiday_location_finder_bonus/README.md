# Holiday location finder

## Context and objectives

You have been asked to develop an interactive and user-friendly destination suggestion application.

"User-friendly", or "accessible" means that you have to deal with common causes of errors from users who would discover your application without knowing its development process.

## Specs

### Program

- Build a simple program that outputs a list of continent to choose from, and asks the user to choose one of them.
- The program should output a random city from that continent. There should be at least five cities per continent.

This part requires the use of the NodeJS module `readline`.

Your program should work pretty much like this:

```shell
***Welcome to HOLIDAY LOCATION FINDER***

This program will help you find a location based on the continent you will input.

Here is the list of continent to chose from:
- Europe
- North America
- South America
- Asia
- Africa
- Oceania

Please input your choice:
> Europe

You chose Europe. I think you really should go spend some time in Bruxelles, Belgium.
```

---

### Data structure

- Create a tuple of continents:

- Europe
- North America
- South America
- Asia
- Africa
- Oceania

> No need to tell you why Antarctica isn't present there 😅

- Create an object of cities with the following data structure:

```ts
{
  MiddleEarth: ["Minas Anor", "Osgiliath", "Isengard"],
  ...
}
```

> Both of `continents` and `cities` should be typed with **type aliases**

---

### Folder architecture

Now that we know how to `import`/`export` snippets of code, try to make use of it. Don't think this exercise as a big function. Split your code into multiple, reusable bits. To help you in this task, you should use the following folder architecture:

```md
├──data/
│ └── data.ts
├──utils/
│ ├── handleUserInput.ts
│ └── ...
└── holidayLocationFinder.ts
```

- `data/` - Put your data here (ie. your continent array and cities object).
- `utils/` - This is a folder where you can place utility functions you can use throughout the application (ie. formatting functions, `getRandomCityFromContinent`, `handleUserInput`). Use those small functions to build bigger things with.

---

- Use `yarn start` to launch the program.

- You can use `yarn test` to help you during the development.

---

### Tips

You will need to use `index signature` typing to access values from you cities object.

---

### Good practices

Before starting to code furiously, remember that writing some `pseudo code` is a really efficient practice for this kind of task.

Your program should not be case sensitive, meaning that a user inputting "europe", "Europe" or even "EuROpe" should get the same output. If you plan to go for the **style bonus** found under this section (and it is strongly encouraged to do so), we suggest you using the `PascalCase` to help searching the continent for your conditions (ie. south america => SouthAmerica).

---

### Style bonus 😎

You can make use of `regex` to "sanitize" the user input from symbols (ie: `.`, `/`, `_`, etc.). If you chose to, remember that [regexr](https://regexr.com/) if your best friend.
