function greeter(peoples) {
  for (let i = 0; i < peoples.length; i++) {
    console.log(`Hello ${peoples[i]}!`);
  }
}

// Do not remove the following lines, it is for tests
module.exports = greeter;
