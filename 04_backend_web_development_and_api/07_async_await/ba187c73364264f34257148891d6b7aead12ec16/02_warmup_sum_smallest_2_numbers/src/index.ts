export function sumTwoSmallestNumbers(nombre: number[]): number {
  nombre.sort((a, b) => a - b);
  const a = nombre[0];
  const b = nombre[1];
  const c = a + b;
  return c;
}
