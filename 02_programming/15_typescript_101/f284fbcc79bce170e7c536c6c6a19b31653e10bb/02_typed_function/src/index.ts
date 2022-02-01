// Remove 'unknown' and 'any' types by adequate ones
function introduce(name: string, age: number): void {
  console.log(`${name} is ${age} years old.`);
}

introduce("Frieda", 28);
introduce("Francis", 34);

// Leave the line below for tests to work properly.
export { introduce };
