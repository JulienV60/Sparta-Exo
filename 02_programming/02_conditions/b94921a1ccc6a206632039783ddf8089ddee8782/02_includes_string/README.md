# Search in a string with includes

## Context and Objectives

A friend sent you a piece of a speech, but since you're in a dev bootcamp.. You only want to hear about programming languages.
Most people would read it all, the smarter ones would do a search with cmd + f. But you... You're built different: You're going to code your own search with the `string`'s method `includes`. And it's even better 😎

## Specs

**Note**: To run this file, in your terminal, go to the folder `02_includes_string` and execute the exercice with `node src/index.js`

In the `src` repository, open the `index.js` file and code the following specifications:

Create a constant called `areMyWordsInTheSentence` bound to the value of `includes` used on the variable `sentence` with with variable `myWords`.

Then, create a condition that will log:

- `"Yes, they are talking about "` and the variable `myWords` if the words are in the sentence
- `"Sadly, they are not talking about "` and the variable `myWords` if not
