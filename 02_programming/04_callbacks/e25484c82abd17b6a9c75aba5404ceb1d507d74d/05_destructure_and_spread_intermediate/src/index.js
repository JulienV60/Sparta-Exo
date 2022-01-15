// Here are some examples

let storageHell,[head,...rest] = [
  [],
  ["IPad", "IPhone"],
  ["GameBoy color"],
  ["Nes", "Donkey kong 64"],
  ["Apex Legends Starter Pack", "LG 5K 27p screen"],
  ["Coffee Machine", "Azelad"],
];
// Should be cleaned this way => ['IPad', 'IPhone', 'GameBoy color', 'Nes', 'Donkey kong 64', 'Apex Legends Starter Pack', 'LG 5K 27p screen', 'Coffee Machine', 'Azelad']

const formattedStorage=formatStorage(storageHell);


function formatStorage(storageHell) {
  return [1,2,3,4,5,6,7,8,9];};




// ↓ Feel free to uncomment this next line, or even create more to try everything you do ↓
console.log(formatStorage(storageHell));

// Don't modify this, it is for the tests.
module.exports = formatStorage;
