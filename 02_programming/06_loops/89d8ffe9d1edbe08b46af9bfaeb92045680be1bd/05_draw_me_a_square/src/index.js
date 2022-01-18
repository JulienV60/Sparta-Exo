function square(sizeOfSquare) {
  let size = "";

  for (let i = 0; i < sizeOfSquare; i++) {
    for (let j = 0; j < sizeOfSquare; j++) {
      size += "*";
    }

    console.log(size);

    size = "";
  }
}

// Do not remove the following line, it is for tests
module.exports = square;
