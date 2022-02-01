# Typing functions

## Context and objectives

Another pillar of TypeScript is function typing! Like we did with variables, we will now type functions.

## Specs

Read carefully the function provided in `./src/index.ts`: `introduce()` takes the name and the age of a person as parameters and just logs a sentence with the name and the age.

You have to type both `name` and `age` parameters and the return value of the function.

```typescript
introduce("Bilbo", 129); // → "Bilbo is 129 years old."
```

No traps here: look at the function's calls to help you find parameters' types. You can also use `typeof ...` to check the type of each parameter in your function! It is not necessary for the function to properly work but to help you out!

**Hint**: the return value is as important as parameters, but it can be tricky when absent because it is still necessary. Hopefully, ESLint warns you when your typing is not correct: position your cursor over the error in your code! 🔍
