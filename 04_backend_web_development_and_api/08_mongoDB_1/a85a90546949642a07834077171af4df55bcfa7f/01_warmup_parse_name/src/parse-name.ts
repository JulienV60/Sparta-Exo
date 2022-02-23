type Person = {
  firstName: string;
  lastName: string;
};

export function parseName(name: string): Person {
  return { firstName: name.slice(-12, -7), lastName: name.slice(5) };
}
