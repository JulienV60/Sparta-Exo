const { chooseOperation, addition, multiplication, substraction, division } = require("../src/chooseOperation");

describe("#chooseOperation ", () => {
  test("Should take three parameters", () => {
    expect(chooseOperation.length).toBe(3);
  });

  test("Should throw an error when called with something else than expected parameters", () => {
    const errorsNum1 = [];
    const errorsNum2 = [];
    const errorsFunc = [];

    const nonExpectedNumParams = [
      "",
      [],
      {},
      null,
      2.5,
      /5/,
      () => {
        null;
      },
    ];
    const nonExpectedFuncParams = ["", [], {}, null, 2.5, /5/];

    nonExpectedNumParams.forEach((num1) => {
      try {
        chooseOperation(num1, 10, addition);
      } catch (e) {
        errorsNum1.push(e);
      }
    });

    nonExpectedNumParams.forEach((num2) => {
      try {
        chooseOperation(10, num2, addition);
      } catch (e) {
        errorsNum2.push(e);
      }
    });

    nonExpectedFuncParams.forEach((num3) => {
      try {
        chooseOperation(10, 10, num3);
      } catch (e) {
        errorsFunc.push(e);
      }
    });

    expect(errorsNum1.length).toBe(nonExpectedNumParams.length);
    expect(errorsNum2.length).toBe(nonExpectedNumParams.length);
    expect(errorsFunc.length).toBe(nonExpectedFuncParams.length);
  });

  test("Should return the rigth result for each operation", () => {
    const number1 = 11;
    const number2 = 27;
    const nonExpectedFuncParams = [
      { type: addition, result: 38 },
      { type: substraction, result: -16 },
      { type: multiplication, result: 297 },
      { type: division, result: 0.4074074074074074 },
    ];

    nonExpectedFuncParams.forEach((element) => {
      return expect(chooseOperation(number1, number2, element.type)).toEqual(element.result);
    });
  });
});
