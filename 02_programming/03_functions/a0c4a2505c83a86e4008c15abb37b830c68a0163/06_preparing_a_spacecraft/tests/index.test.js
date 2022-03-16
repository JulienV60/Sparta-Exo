const { checkFuelLevel, checkCargoHold } = require("../src/index");

let studentCode;
const fuel = [{ level: 25, status: "green" }, { level: 11, status: "yellow" }, { level: 0, status: "red" }];
const cargo = [
  {
    details: ["Burst Laser II", "Artemis Missiles", "Defense Drone Mk I", "Repair Arm"],
    status: "Full"
  },
  {
    details: ["Burst Laser II", "Artemis Missiles", "Defense Drone Mk I"],
    status: `Spaces available: 1`
  },
  {
    details: ["Burst Laser II", "Artemis Missiles", "Defense Drone Mk I", "Repair Arm", "Pre-igniter"],
    status: `Over capacity by 1 items.`
  },
];

describe("#06_preparing_a_spacecraft", () => {
  test("Should return properly with checkFuelLevel()", () => {

    fuel.forEach((value) => {

      const returnedValue = checkFuelLevel(value.level);

      expect(returnedValue).toEqual(`Fuel level: ${value.status}`);
    })
  });

  test("Should return properly with checkCargoHold()", () => {

    cargo.forEach((value) => {

      const returnedValue = checkCargoHold(value.details);

      expect(returnedValue).toEqual(value.status);
    })
  });
})
