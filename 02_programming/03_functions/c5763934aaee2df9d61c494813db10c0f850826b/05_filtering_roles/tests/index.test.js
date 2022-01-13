// /* global beforeAll test expect */
const filteredRoles = require("../src/index");
const path = require("path");
const readcode = require("./readcode");

let studentCode;
const listOfPersons = [
  {
    name: "Frieda",
    role: "Teacher",
  },
  {
    name: "John",
    role: "Teacher",
  },
  {
    name: "Francis",
    role: "Student",
  },
  {
    name: "Jane",
    role: "Student",
  },
];

beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(
    path.resolve(__dirname, "../src/index.js")
  );
  return studentCode;
});

describe("#05_filtered_roles", () => {
  test("should return all teachers when this role is specified", () => {
    const expectedListOfTeachers = listOfPersons.filter(element => element.role === "Teacher");

    expect(filteredRoles(listOfPersons, "Teacher")).toEqual(expectedListOfTeachers);
  });

  test("should return all teachers when this role is not specified", () => {
    const expectedListOfTeachers = listOfPersons.filter(element => element.role === "Teacher");

    expect(filteredRoles(listOfPersons)).toEqual(expectedListOfTeachers);
  });

  test("should return all students when this role is specified", () => {
    const expectedListOfStudents = listOfPersons.filter(element => element.role === "Student");

    expect(filteredRoles(listOfPersons, "Student")).toEqual(expectedListOfStudents);
  });

  test("should return an empty array when unexistent role is specified", () => {
    expect(filteredRoles(listOfPersons, "Astonaut")).toEqual([]);
  });

  test("should be logged without a loop", () => {
    return studentCode.then((code) => {

      let usingLoop = false;

      if(/for/.test(code) || /while/.test(code) || /forEach/.test(code) || /map/.test(code)){
        usingLoop = true;
        console.warn("Smart move to use a loop, but no loops authorized for this exercise!");
      }

      expect(usingLoop).not.toEqual(true);
    })
  });
})
