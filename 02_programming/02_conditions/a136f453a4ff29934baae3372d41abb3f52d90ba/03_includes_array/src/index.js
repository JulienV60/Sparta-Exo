const scientistsNumbers = [666, 3141, 23, 1618, 42];
// Create a constant theComputedOne that is bound to the number 42
const theComputedOne = 42;
// Create a constant called isTheComputedOneInOurNumbers bound to the value
// of includes used on the array someRandomNumbers with the variable theComputedOne
const isTheComputedOneInOurNumbers = scientistsNumbers.includes(theComputedOne);
// Create a condition that will log "The Answer to the Ultimate Question of Life, the Universe, and Everything is " and
// the variable theComputedOne if the number theComputedOne is in the array someRandomNumbers then ", I knew it!",
// "I always thought something was fundamentally wrong with the universe." if not
if(isTheComputedOneInOurNumbers){
  console.log(`The Answer to the Ultimate Question of Life, the Universe, and Everything is ${theComputedOne}, I knew it!`);
}
else { console.log("I always thought something was fundamentally wrong with the universe.");}