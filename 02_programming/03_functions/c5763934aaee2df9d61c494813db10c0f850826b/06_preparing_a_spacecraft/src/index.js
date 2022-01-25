function checkFuelLevel(number) {
  Number.isInteger(number);
  if (number >= 20) {
    return "Fuel level: green";
  }
  if (number >= 10) {
    return "Fuel level: yellow";
  } else {
    return "Fuel level: red";
  }
}

function checkCargoHold(array) {
  Array.isArray(array.length);
  console.log(array.length);
  if (array.length == 4) {
    return "Full";
  }
  if (array.length < 4) {
    return `Spaces available: ${array.length - 2}`;
  }
  if (array.length > 4) {
    return `Over capacity by ${array.length - 4} items.`;
  }

  // Code here
}

// Do not remove last lines, it is for tests
module.exports = { checkFuelLevel, checkCargoHold };
