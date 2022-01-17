const { TestScheduler } = require("jest");
const theEFilter = require("../src/index");

test("It should return nothing from Gadsby", () => {
  expect.assertions(1);

  const result = theEFilter([
    "If Youth, throughout all history, had had a champion to stand up for it",
    "to show a doubting world that a child can think",
    "and, possibly, do it practically",
    "ou wouldn't constantly run across folks today who claim that \"a child don't know anything.\"",
    "A child's brain starts functioning at birth",
    "and has, amongst its many infant convolutions, thousands of dormant atoms, into which God has put a mystic possibility for noticing an adult's act, and figuring out its purport.",
  ]);

  expect(result).toHaveLength(0);
});

test("It should return sentences with lowercase e", () => {
  expect.assertions(1);

  const result = theEFilter([
    "This is a random sentence",
    "But as you can see, it's easy to have e in them",
    "Alligator",
  ]);

  expect(result).toEqual(["This is a random sentence", "But as you can see, it's easy to have e in them"]);
});

test("It should return sentences with uppercase E", () => {
  expect.assertions(1);

  const result = theEFilter(["This is still a random sentence", "Elton John"]);

  expect(result).toEqual(["This is still a random sentence", "Elton John"]);
});
