type ReceivedObject = {
  a: string;
  b: number;
};

function transformObject(objet: ReceivedObject): (string | number)[] {
  return [objet.a, objet.b];
}
// Leave the line below for tests to work properly.
export { transformObject };
