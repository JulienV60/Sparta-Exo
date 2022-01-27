# Loyalty Card Manager persistence (bonus)

## Context and objectives

Today you wrote a program which handle loyalty cards for customers.
Right now, if we stop the program, all the generated data is lost because it is loaded and managed in the program memory.

What you need now is **persistence**: a way to store the data in a file.

## Specs

Take the code from your loyalty card program and try to make it work in this exercise (Copy / Paste will be your friends here 😉).
Then you need two new functionalities:

### Load data

When your program starts, it has to load the data coming from the `src/data/customer.json` file.

> Once the file is open, you will get a string version of this data. Look at `JSON.parse` **[documentation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/parse)** to transform it into a usable data type.

### Save data

When you add a customer or a new purchase in a customer's history, you have to save those changes.

To do so, write the data in the file as explain in the course. The point here is that **you need to transform your data** into a string. Look at the `JSON.stringify` **[documentation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/stringify)** to learn how to do it.

**One important thing to note**: don't try to add data at the end of the file. It won't work, so you will have to **overwrite** the entire file each time.


## Tests

There are no tests! It should just work 😁
