const findPosition = (array,name,counter) => {

  if (array.every&& typeof name === "string" && Number.isInteger(counter)){
    return array.every;

  } else {
    throw new Error("Parameter is not expected types");
  }};

// Leave line below for tests to work properly
module.exports = findPosition;
