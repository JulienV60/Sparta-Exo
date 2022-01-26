function calculator(reader, numberOne, operator, numberTwo) {
  if (operator === "+") {
    addition(numberOne, numberTwo);
  }
  if (operator === "-") {
    substraction(numberOne, numberTwo);
  }
  if (operator === "*") {
    multiplication(numberOne, numberTwo);
  }
  if (operator === "/") {
    division(numberOne, numberTwo);
  }

  function addition(numberOne, numberTwo) {
    const result = parseFloat(numberOne) + parseFloat(numberTwo);
    return end(numberOne, operator, numberTwo, result);
  }
  function substraction(numberOne, numberTwo) {
    const result = parseFloat(numberOne) - parseFloat(numberTwo);
    return end(numberOne, operator, numberTwo, result);
  }
  function multiplication(numberOne, numberTwo) {
    const result = parseFloat(numberOne) * parseFloat(numberTwo);
    return end(numberOne, operator, numberTwo, result);
  }
  function division(numberOne, numberTwo) {
    const result = parseFloat(numberOne) / parseFloat(numberTwo);
    return end(numberOne, operator, numberTwo, result);
  }
  function end(numberOne, operator, numberTwo, result) {
    console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);

    reader.close();
  }
}
export { calculator };
