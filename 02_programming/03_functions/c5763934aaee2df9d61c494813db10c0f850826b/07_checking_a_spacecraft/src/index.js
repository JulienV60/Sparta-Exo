// Code her
const stealthyFuelLevelCheck = (number) => {
  Number.isInteger(number);
  if (number >= 20) {
    return "Fuel level: green";
  }
  if (number >= 10) {
    return "Fuel level: yellow";
  } else {
    return "Fuel level: red";
  }
};

const stealthyCargoHoldCheck = (array) => {
  Array.isArray(array.length);
  console.log(array.length);
  if (array.length == 4) {
    return "Full";
  }
  if (array.length < 4) {
    return "Spaces available: 2";
  }
  if (array.length > 4) {
    return `Over capacity by ${array.length - 4} items.`;
  }
};

module.exports = { stealthyFuelLevelCheck, stealthyCargoHoldCheck };
