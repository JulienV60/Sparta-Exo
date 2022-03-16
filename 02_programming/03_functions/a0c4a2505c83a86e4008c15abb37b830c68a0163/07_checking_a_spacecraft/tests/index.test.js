// /* global beforeAll test expect */
const path = require("path");
const { readCode, findNode } = require("camp2-helpers");
const { stealthyFuelLevelCheck, stealthyCargoHoldCheck } = require("../src/index");

const functionType = (fctn) => {
  if (fctn.declarations && fctn.declarations[0]) {
    return fctn.declarations[0].init.type;
  }
  return "FunctionExpression";
};

let studentCode;
const fuel = [{ level: 31, status: "green" }, { level: 11, status: "yellow" }, { level: 2, status: "red" }];
const cargo = [
  {
    details: ["Burst Laser II", "Artemis Missiles", "Defense Drone Mk I", "Repair Arm"],
    status: "Full",
  },
  {
    details: ["Burst Laser II", "Artemis Missiles"],
    status: `Spaces available: 2`,
  },
  {
    details: ["Burst Laser II", "Artemis Missiles", "Defense Drone Mk I", "Repair Arm", "Pre-igniter", "Fire Beam"],
    status: `Over capacity by 2 items.`,
  },
];

beforeAll(() => {
  // Loads the student's code
  studentCode = readCode(
    path.resolve(__dirname, "../src/index.js")
  );
  return studentCode;
});

describe("07_checking_a_spacecraft", () => {
  test("stealthyFuelLevelCheck should be an arrow function with one parameter", () => {
    return studentCode.then((code) => {

      const studentStealthyFuelLevelCheck = findNode(code, "stealthyFuelLevelCheck");

      expect(typeof stealthyFuelLevelCheck).toBe("function");
      expect(functionType(studentStealthyFuelLevelCheck)).toBe("ArrowFunctionExpression");
      expect(stealthyFuelLevelCheck.length).toBe(1);
    });
  });

  test("Should return properly with stealthyFuelLevelCheck", () => {
    fuel.forEach((value) => {

      const returnedValue = stealthyFuelLevelCheck(value.level);

      expect(returnedValue).toEqual(`Fuel level: ${value.status}`);
    })
  });

  test("stealthyCargoHoldCheck should be an arrow function with one parameter", () => {
    return studentCode.then((code) => {

      const studentStealthyCargoHoldCheck = findNode(code, "stealthyCargoHoldCheck");

      expect(typeof stealthyCargoHoldCheck).toBe("function");
      expect(functionType(studentStealthyCargoHoldCheck)).toBe("ArrowFunctionExpression");
      expect(stealthyCargoHoldCheck.length).toBe(1);
    })
  })

  test("Should return properly with stealthyCargoHoldCheck", () => {
    cargo.forEach((value) => {

      const returnedValue = stealthyCargoHoldCheck(value.details);

      expect(returnedValue).toEqual(value.status);
    })
  });
})
