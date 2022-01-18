function triangle(sizeOfTriangle) {
  let size = "";

  for (let i = 0; i < sizeOfTriangle; i++) {
    for (let j = -1; j < i; j++) {
      size += "*";
    }

    console.log(size);

    size = "";
  }
}
// Do not remove the following line, it is for tests
module.exports = triangle;
