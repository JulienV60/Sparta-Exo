function letterCount(name, letter) {
  let comptage = 0;

  for (let i = 0; i < name.length; i++) {
    if (name.charAt(i) == letter) {
      comptage += 1;
    }
  }
  return comptage;
}

// Code here

// Do not remove the following line, it is for tests
module.exports = letterCount;
