# Orange tree (bonus)

## Context and objectives

Good job! You have now made a complex living being 😁. It is now time to add some security to your two classes!

First off, copy (manually) your `Tree` and `OrangeTree` class in `./src`.

The goal of this part is to set some control over the relevant mechanism of your tree. This is where `access modifiers` come into play!

Before diving into the specs, you probably should take a few minutes to think about what you would do if you were all alone 😉. Do you think the user should be able to do `myTree.alive = false`, or call `myTree.growOranges()` without actually aging the tree?

As always, you can use the `src/index.ts` to play around with your code, by running **`yarn start`**.

## Specs

Let's begin with the `Tree` class. Transform it as an `abstract` class.

By convention, `protected` and `private` properties are prepended by `_` (e.g. `_alive`).
This allows you to create `getters` and `setters` with the name you intended (`tree.alive`) and avoid having two things with the same name in your class which would be a bug for TypeScript.

You must add the `protected` access modifier to the class' properties, and to the `_isAlive` method, that will now be declared in `Tree`, to be used by `OrangeTree`.

`ageOneYear` will also be declared in `Tree` to be used in `OrangeTree` and both need to be `abstract` methods.

We know that `isAlive` is not meant to be accessed outside the sub-class scope, so we should also restrict the outside access to it. Do you think this `_isAlive` should be `private` or `protected`? Try them both, TypeScript should be there to help you on this one 😁.

> ⚠️ Keep in mind that declaring a class member as `protected` in the parent class doesn't enforce the behavior in derived classes.

It is time to do the same to the `OrangeTree` class. You can already see quite a lot of errors in the file, as we made some changes to the `Tree` class. Start off by fixing them. You also must prepend an underscore to `oranges`.

Remember that if you have methods that are only meant to be called inside the class scope, they should probably be `private` 😉.

When done, you can add a `getter` to the `OrangeTree`'s properties. They should be straight forward, always returning the type declared in the previous parts. You'll be able to play around with more meaningful `getters` in the next part 😉.

It is now time to run `yarn test`, and go with the last part, the orange tree forest!
