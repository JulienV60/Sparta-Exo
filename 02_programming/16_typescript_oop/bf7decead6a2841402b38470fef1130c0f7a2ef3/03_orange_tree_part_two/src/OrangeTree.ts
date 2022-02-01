import { Tree } from "./Tree";

// Code your class here.
class OrangeTree extends Tree {
  oranges: string[];

  constructor(age: number, oranges: string[]) {
    super(age);
    this.oranges = [];
  }

  ageOneYear(): void {
    this.age += 1;

    if (this.age >= 1 && this.age <= 9) {
      this.height = this.age * 25;
    }
    if (this.age >= 10 && this.age <= 20) {
      this.height = (this.age - 9) * 10 + 225;
    }
    if (this.age > 20) {
      this.height = 335;
    }

    this.growOranges();
    if (this.alive === true) {
      this.isAlive();
    }
  }
  isAlive(): boolean {
    const randomBoolean: boolean = Math.random() < 0.5;

    if (this.age < 50) {
      this.alive === true;
    }
    if (this.age > 50 && this.age <= 99) {
      this.alive = randomBoolean;
    }

    if (this.age > 60) {
      this.alive = Math.random() < 0.4;
    }
    if (this.age > 70) {
      this.alive = Math.random() < 0.3;
    }
    if (this.age > 80) {
      this.alive = Math.random() < 0.2;
    }
    if (this.age > 90) {
      this.alive = Math.random() < 0.1;
    }
    if (this.age > 91 && this.age < 99) {
      this.alive = Math.random() < 0.05;
    }
    if (this.age === 100) {
      this.alive = false;
    }
    return this.alive;
  }
  growOranges(): void {
    this.oranges = [];
    if (this.age >= 5 && this.age <= 10)
      for (let i = 0; i < 10; i++) {
        this.oranges.push("🍊"[i]);
      }
    if (this.age >= 11 && this.age <= 20)
      for (let i = 0; i < 20; i++) {
        this.oranges.push("🍊"[i]);
      }
    if (this.age >= 21 && this.age <= 40)
      for (let i = 0; i < 5; i++) {
        this.oranges.push("🍊"[i]);
      }
  }

  pickAnOrange(): void {
    if (this.oranges.length == 0) {
      return;
    } else if (this.oranges.length > 1) {
      this.oranges.length -= 1;
    }
  }
}

// Leave the line below for tests to work properly.
export { OrangeTree };
