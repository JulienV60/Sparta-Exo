
function mots (mots){
  if(mots.includes("E")||mots.includes("e"))return mots;
}
function theEFilter(sentences){
  return sentences.filter(mots);
}

const result = theEFilter([
  "This is a random sentence",
  "But as you can see, it's easy to have e in them",
  "Alligator",
]);
console.log(result);
// Do not remove the following line, it is for tests
module.exports = theEFilter;
