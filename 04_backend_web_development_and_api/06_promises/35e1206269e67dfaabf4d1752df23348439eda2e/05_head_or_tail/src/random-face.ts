// You don't have to modify this file

export function getRandomFace(): string {
  const choices = ["head", "tail"];
  return choices[Math.floor(Math.random() * 2)];
}
