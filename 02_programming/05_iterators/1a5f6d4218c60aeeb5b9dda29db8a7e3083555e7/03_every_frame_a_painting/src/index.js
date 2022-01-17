function canTakeArtPieces(pieces) {
  return pieces.every((piece) => piece.type === "painting");
}


/*const isBelowThreshold = (currentValue) => currentValue < 40;
console.log(array1.every(isBelowThreshold));*/


// Do not remove the following line, it is for tests
module.exports = canTakeArtPieces;
