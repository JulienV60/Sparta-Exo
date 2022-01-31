type MyTuple = [string, number];

function handleTuple(hello: MyTuple): void {
  if (typeof hello[0] === typeof "String") {
    console.log(hello[0] + "is a string");
    console.log(hello[1] + "is a number");
  }
}

// Leave the line below for tests to work properly.
export { handleTuple };
