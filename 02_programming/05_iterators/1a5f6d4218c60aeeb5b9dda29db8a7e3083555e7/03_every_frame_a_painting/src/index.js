function canTakeArtPieces(pieces) {
  return pieces.every((piece) => piece.type === "painting");
}



// Do not remove the following line, it is for tests
module.exports = canTakeArtPieces;
