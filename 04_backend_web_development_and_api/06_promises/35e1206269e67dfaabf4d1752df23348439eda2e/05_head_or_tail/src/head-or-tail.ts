import { getRandomFace } from "./random-face";

function headOrTail(headOrTail: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (getRandomFace() === headOrTail) {
      resolve("Well done");
    } else {
      reject("Nope.");
    }
  });
}

export { headOrTail };
