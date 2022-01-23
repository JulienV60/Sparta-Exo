function addition(numberOne, numberTwo) {
  return numberOne + numberTwo;
}
function substraction(numberOne, numberTwo) {
  return numberOne - numberTwo;
}
function multiplication(numberOne, numberTwo) {
  return numberOne * numberTwo;
}
function division(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

function chooseOperation(numberOne, numberTwo, callback) {
  if (Number.isInteger(numberOne) && Number.isInteger(numberTwo)) {
    return callback(numberOne, numberTwo);
  }
  throw new Error();
}

// Leave the line below for tests to work
module.exports = { chooseOperation, addition, substraction, multiplication, division };
