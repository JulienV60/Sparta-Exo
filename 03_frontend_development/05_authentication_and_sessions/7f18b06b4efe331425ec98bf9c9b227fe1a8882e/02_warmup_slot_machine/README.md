# Warmup: Slot Machine

## Context and objectives

Whether you are a fan of slot machines or not, here is a very brief reminder of how the most classic of them works: three symbols line up (we call that a "payline") and if they are all identical, you win!

Let's try to reproduce this symbols verification system.

## Specs

Create a **`slotMachine`** function that will take *a tuple of three values* and return *a boolean* depending on whether the three values are strictly identical to each other or not.

```typescript
const paylineOfStrings = ["🍒", "🍒", "🍒"];
const paylineOfNumbers = [1, 1, 1];
const losingPayline = [true, false, true];

slotMachine(paylineOfStrings); //return "true"
slotMachine(paylineOfNumbers); //return "true"
slotMachine(losingPayline); //return "false"
```

As you may have noticed in the example above: we will not know in advance the type of the three values of the tuple. However, you should be able to type your parameter without using *`any`*

**Don't forget to export your function.**

>**Eslint will block you if you don't give a function return type or arguments types**
