const findPosition = (array, name, counter) => {
  if (Array.isArray(array) && typeof array[0] === "string" && typeof name === "string" && Number.isInteger(counter)) {
    if (array.includes(name)) {
      return `${name} is at position #${array.indexOf(name) + 1} in this array.`;
    } else {
      return `${name} is not present in this array.`;
    }
  } else {
    throw new Error("Invalid parameters");
  }
};

module.exports = findPosition;
