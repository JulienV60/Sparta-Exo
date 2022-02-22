type Profile = {
  name: string;
  age: number;
  country: string;
  haveTraveled: boolean;
};

export function assembleData(nom: string[], age: number[], country: string[], haveTraveled: boolean[]): Profile[] {
  const result = [];
  for (let i = 0; i < nom.length; i++) {
    result.push({ name: nom[i], age: age[i], country: country[i], haveTraveled: haveTraveled[i] });
  }
  return result;
}

// Code here
