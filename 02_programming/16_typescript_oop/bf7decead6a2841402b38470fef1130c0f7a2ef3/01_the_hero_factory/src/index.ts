class Hero {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHi(introduce: string): string {
    console.log(`I'm ${introduce}`);
  }
}

// Leave the line below for tests to work properly.
export { Hero };
