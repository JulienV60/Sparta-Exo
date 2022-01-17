function greetOnePerson(person){console.log(`Hello ${person}!`);}
function greeter(listofPerson){
  listofPerson.forEach(greetOnePerson);
}
greeter(["Joe","Mike","Robert"]);
// Do not remove the following lines, it is for tests
module.exports = greeter;
