function mapLoop(numbers, double) {
  let resultToCommit = [];
  for (let i = 0; i < numbers.length; i++) {
    resultToCommit.push(double(numbers[i]));
  }

  return resultToCommit;
}

// Code the function here.}}

// Do not remove the following lines, it is for tests
module.exports = mapLoop;
