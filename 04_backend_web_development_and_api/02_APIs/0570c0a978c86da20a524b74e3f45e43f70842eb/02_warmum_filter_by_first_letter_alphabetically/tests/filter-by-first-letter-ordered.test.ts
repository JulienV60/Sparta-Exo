import { Customer } from "../data/customers";
import { filterByFirstLetterOrdered } from "../src/index";

const fakeData1: Customer[] = [
  { first_name: "Filberto", last_name: "Mowles" },
  { first_name: "Fayette", last_name: "Jbcobson" },
  { first_name: "Fayette", last_name: "Jacobson" },
  { first_name: "Tiffani", last_name: "Siebart" },
  { first_name: "Paulette", last_name: "John" },
  { first_name: "Fayette", last_name: "Jfcobson" },
];

const fakeData2: Customer[] = [
  { first_name: "Filberto", last_name: "Mowles" },
  { first_name: "Fayette", last_name: "Macobson" },
  { first_name: "Fayette", last_name: "Mbcobson" },
  { first_name: "Tiffani", last_name: "Siebart" },
  { first_name: "Paulette", last_name: "John" },
  { first_name: "Fayette", last_name: "Mgcobson" },
];

describe("#filterByFirstLetterOrdered()", () => {
  test("it should be a function with two parameters", () => {
    expect(typeof filterByFirstLetterOrdered).toBe("function");
    expect(filterByFirstLetterOrdered.length).toBe(2);
  });

  test("it should return an empty array when the second parameter is more than one letter", () => {
    expect(filterByFirstLetterOrdered(fakeData1, "Ba")).toEqual([]);
  });

  test("it should return an array of Customer sorted alphabetically", () => {
    const expectedData: Customer[] = [
      { first_name: "Fayette", last_name: "Jacobson" },
      { first_name: "Fayette", last_name: "Jbcobson" },
      { first_name: "Fayette", last_name: "Jfcobson" },
      { first_name: "Paulette", last_name: "John" },
    ];

    expect(Array.isArray(filterByFirstLetterOrdered(fakeData1, "J"))).toBe(true);
    expect(filterByFirstLetterOrdered(fakeData1, "J")).toEqual(expectedData);
  });

  test("it should return an array of Customer sorted alphabetically even if we change their value and the search letter", () => {
    const expectedData: Customer[] = [
      { first_name: "Fayette", last_name: "Macobson" },
      { first_name: "Fayette", last_name: "Mbcobson" },
      { first_name: "Fayette", last_name: "Mgcobson" },
      { first_name: "Filberto", last_name: "Mowles" },
    ];

    expect(Array.isArray(filterByFirstLetterOrdered(fakeData2, "M"))).toBe(true);
    expect(filterByFirstLetterOrdered(fakeData2, "M")).toEqual(expectedData);
  });
});
