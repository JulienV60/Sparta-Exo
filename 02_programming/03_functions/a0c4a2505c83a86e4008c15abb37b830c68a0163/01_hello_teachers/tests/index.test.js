/* global beforeAll test expect */
const helpers = require("camp2-helpers");
const path = require("path");
const readcode = require("./readcode");
const sayHelloToTeachers = require("../src/index");

let studentCode;
const spartaTeachers = ["Thomas", "Fenn", "Florian", "Martin", "Louis"];

beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(
    path.resolve(__dirname, "../src/index.js")
  );
  return studentCode;
});

describe("#01_hello_teachers", () => {
  test("`spartaTeachers` should be present and exactly like provided", () => {
    return studentCode.then((code) => {

      const studentSpartaTeachers = eval(code + "; spartaTeachers;");

      expect(studentSpartaTeachers).toEqual(spartaTeachers);
    })
  });

  test("print 'Hello Teacher!' for every teacher", () => {
    return studentCode.then((code) => {

      let logs = "";
      console.log = (log) => logs += " " + log;

      const studentSpartaTeachers = eval(code + "; spartaTeachers;");

      sayHelloToTeachers(studentSpartaTeachers);

      studentSpartaTeachers.forEach(teacher => {
        const r = new RegExp(`hello ${teacher}`, 'ig')
        helpers.expectMessage(logs.match(r), `Your function should print Hello ${teacher}`, "warning").not.toBe(null)
      })
      expect(studentSpartaTeachers).toEqual(["Thomas", "Fenn", "Florian", "Martin", "Louis"])
    })
  });

  test("should be logged without a loop", () => {
    return studentCode.then((code) => {

      let usingLoop = false;

      if (/for/.test(code) || /while/.test(code) || /forEach/.test(code)) {
        usingLoop = true;
        console.warn("Smart move to use a loop, but no loops authorized for this exercise!");
      }

      expect(usingLoop).not.toEqual(true);
    })

  })
})
