const question = "spartan, what is your profession?!";

// a constant `hobbyQuestion` bound to a string: "spartan, what is your hobby?!"
// using `slice()` and the constant `question`
const hobbyQuestion = question.slice(0,21)+" hobby?!";
console.log(hobbyQuestion);
// a constant `hobbyQuestionLength` bound to a number that is the length of `hobby`
const hobbyQuestionLength = hobbyQuestion.length;
console.log(hobbyQuestionLength);