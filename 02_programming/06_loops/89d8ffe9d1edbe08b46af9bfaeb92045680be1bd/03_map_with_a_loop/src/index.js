function double(number) {
  return number * 2;
}

function mapLoop(numbers, double) {
  let resultToCommit = [];
  for (let i = 0; i < numbers.length; i++) {
    resultToCommit.push(double(numbers[i]));
  }

  return resultToCommit;
}

mapLoop([1, 2, 3, 4], double);
// Code the function here.}}

// Do not remove the following lines, it is for tests
module.exports = mapLoop;
