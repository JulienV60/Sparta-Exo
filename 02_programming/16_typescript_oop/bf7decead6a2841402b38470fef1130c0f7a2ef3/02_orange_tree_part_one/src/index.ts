class Tree {
  age: number;
  height: number;
  alive: boolean = true;

  constructor(age: number) {
    this.age = age;

    let height = 0;

    if (age >= 1 && age <= 9) {
      height = age * 25;
    }
    if (age >= 10 && age <= 20) {
      height = (age - 9) * 10 + 225;
    }
    if (age > 20) {
      height = 335;
    }
    this.height = height;
  }

  seed(): void {
    this.age = 0;
    this.height = 0;
    this.alive = true;
  }
}
// Leave the line below for tests to work properly.
export { Tree };
