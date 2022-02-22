import { assembleData } from "../src/assembleData";

const names: string[] = ["Alfred", "Berenice", "Colt", "David"];
const ages: number[] = [
  Math.round(Math.random() * 100),
  Math.round(Math.random() * 100),
  Math.round(Math.random() * 100),
  Math.round(Math.random() * 100),
];
const countries: string[] = ["Angola", "Belgium", "Cuba", "Denmark"];
const haveTraveled: boolean[] = [true, false, true, false];

describe("#assembleData", () => {
  test("it should be a function with four parameters", () => {
    expect(typeof assembleData).toBe("function");
    expect(assembleData.length).toBe(4);
  });

  test("it should return an array of objects", () => {
    const assembleArray = assembleData(names, ages, countries, haveTraveled);

    expect(Array.isArray(assembleArray)).toBe(true);

    assembleArray.forEach((profile, index) => {
      expect(Object.keys(profile).length).toBe(4);
      expect(Object.keys(profile)).toEqual([
        "name",
        "age",
        "country",
        "haveTraveled",
      ]);
      expect([
        profile.name,
        profile.age,
        profile.country,
        profile.haveTraveled,
      ]).toEqual([
        names[index],
        ages[index],
        countries[index],
        haveTraveled[index],
      ]);
    });
  });
});
