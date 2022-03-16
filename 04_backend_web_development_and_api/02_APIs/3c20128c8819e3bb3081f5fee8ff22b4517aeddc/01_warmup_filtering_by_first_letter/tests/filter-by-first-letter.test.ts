import { Customer } from "../data/customers";
import { filterByFirstLetter } from "../src/filter_by_first_letter";

const fakeData: Customer[] = [
  { first_name: "Filberto", last_name: "Mowles" },
  { first_name: "Fayette", last_name: "Jacobson" },
  { first_name: "Tiffani", last_name: "Siebart" },
  { first_name: "Paulette", last_name: "John" },
];

describe("#filterByFirstLetter()", () => {
  test("it should be a function with two parameters", () => {
    expect(typeof filterByFirstLetter).toBe("function");
    expect(filterByFirstLetter.length).toBe(2);
  });

  test("it should return an empty array when the second parameter is more than one letter", () => {
    expect(filterByFirstLetter(fakeData, "Ba")).toEqual([]);
  });

  test("it should return an array of Customer", () => {
    const expectedData: Customer[] = [
      { first_name: "Fayette", last_name: "Jacobson" },
      { first_name: "Paulette", last_name: "John" },
    ];
    expect(Array.isArray(filterByFirstLetter(fakeData, "Z"))).toBe(true);
    expect(filterByFirstLetter(fakeData, "J")).toEqual(expectedData);
  });
});
