const path = require("path");
const readcode = require("./readcode");

let studentCode;
beforeAll(() => {
  studentCode = readcode(path.resolve(__dirname, "../src/index.js"));
  return studentCode;
});


describe("#06_switch", () => {
  test("It should log the right message", () => {
    return studentCode.then((code) => {
      const fakeLog = jest.spyOn(console, "log")
        .mockImplementation((log) => log);

      eval(code);

      expect(fakeLog).toHaveBeenCalledWith("The most iconic Italian car! I can sell it for 50 percent less, just for you!");
      fakeLog.mockRestore();
    });
  });

  test("It should log the right message when the chosenCar is a Nissan S-Cargo", () => {
    return studentCode.then((code) => {
      const changedCode = code.replace(
        `let chosenCar = "Fiat Multipla";`, // eslint-disable-line quotes
        `let chosenCar = "Nissan Cube";` // eslint-disable-line quotes
      );

      const fakeLog = jest.spyOn(console, "log")
        .mockImplementation((log) => log);

      eval(changedCode);

      expect(fakeLog).toHaveBeenCalledWith("Wonderful and well made!");
      fakeLog.mockRestore();
    });
  });

  test("It should log the right message when the chosenCar is a Lada Riva", () => {
    return studentCode.then((code) => {
      const changedCode = code.replace(
        `let chosenCar = "Fiat Multipla";`, // eslint-disable-line quotes
        `let chosenCar = "Lada Riva";` // eslint-disable-line quotes
      );

      const fakeLog = jest.spyOn(console, "log")
        .mockImplementation((log) => log);

      eval(changedCode);

      expect(fakeLog).toHaveBeenCalledWith("Ahhh, the Soviet Union car! Good choice!");
      fakeLog.mockRestore();
    });
  });

  test("It should log the right message when the chosenCar is a Fiat 600 Multipla Marinella", () => {
    return studentCode.then((code) => {
      const changedCode = code.replace(
        `let chosenCar = "Fiat Multipla";`, // eslint-disable-line quotes
        `let chosenCar = "Fiat 600 Multipla Marinella";` // eslint-disable-line quotes
      );

      const fakeLog = jest.spyOn(console, "log")
        .mockImplementation((log) => log);

      eval(changedCode);

      expect(fakeLog).toHaveBeenCalledWith("There's no better car to go to the beach! 😎");
      fakeLog.mockRestore();
    });
  });

  test("It should log the right message when the chosenCar is a Nissan S-Cargo", () => {
    return studentCode.then((code) => {
      const changedCode = code.replace(
        `let chosenCar = "Fiat Multipla";`, // eslint-disable-line quotes
        `let chosenCar = "Nissan S-Cargo";` // eslint-disable-line quotes
      );

      const fakeLog = jest.spyOn(console, "log")
        .mockImplementation((log) => log);

      eval(changedCode);

      expect(fakeLog).toHaveBeenCalledWith("It's the PlayStation 5 of the car, enjoy!");
      fakeLog.mockRestore();
    });
  });

  test("It should log the right message when the chosenCar is not in the list", () => {
    return studentCode.then((code) => {
      const changedCode = code.replace(
        `let chosenCar = "Fiat Multipla";`, // eslint-disable-line quotes
        `let chosenCar = "Jaguar Type E";` // eslint-disable-line quotes
      );

      const fakeLog = jest.spyOn(console, "log")
        .mockImplementation((log) => log);

      eval(changedCode);

      expect(fakeLog).toHaveBeenCalledWith("We don't have this model here, we only sell the best quality!");
      fakeLog.mockRestore();
    });
  });

  test("It shouldn't use if/else statements", () => {
    return studentCode.then((code) => {
      const hasIf = code.match(
        "if"
      );

      expect(hasIf).toBeFalsy();
    });
  });
});
