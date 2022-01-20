const readline = require("readline");

const numberGame = require("../src/numberGameWithStats");

const readerMockFactory = (mocks) => {
  const question = jest.fn();
  mocks.forEach((m) => question.mockImplementationOnce(m));
  readline.createInterface = jest.fn().mockReturnValue({
    close: jest.fn().mockImplementationOnce(() => undefined),
    question,
  });
  return readline.createInterface();
};

describe("Number Game with stats", () => {
  let fakeLog;
  beforeEach(() => {
    fakeLog = jest.spyOn(console, "log").mockImplementation(() => {});
    Math.random = jest.fn().mockReturnValue(0.41);
  });

  afterEach(() => {
    Math.random.mockRestore();
    fakeLog.mockRestore();
  });

  it("Should handle the minimum (1) as a number to find", () => {
    Math.random = jest.fn().mockReturnValue(0.0);
    let logs = "";
    fakeLog = jest.spyOn(console, "log").mockImplementation((message) => {
      logs += message;
    });
    const reader = readerMockFactory([(_question, callback) => callback(1)]);
    numberGame(reader);
    expect(logs).toMatch(/you won/i);
    fakeLog.mockRestore();
  });

  it("Should handle the maximum (100) as a number to find", () => {
    Math.random = jest.fn().mockReturnValue(1);
    let logs = "";
    fakeLog = jest.spyOn(console, "log").mockImplementation((message) => {
      logs += message;
    });
    const reader = readerMockFactory([(_question, callback) => callback(100)]);
    numberGame(reader);
    expect(logs).toMatch(/you won/i);
    fakeLog.mockRestore();
  });

  it("Should handle 'too low' numbers", () => {
    let logs = "";
    fakeLog = jest.spyOn(console, "log").mockImplementation((message) => {
      logs += message;
    });
    const reader = readerMockFactory([(_question, callback) => callback(), (_question, callback) => callback(2)]);
    numberGame(reader);
    expect(logs).toMatch(/too low/i);
    fakeLog.mockRestore();
  });

  it("Should handle 'too high' numbers", () => {
    let logs = "";
    fakeLog = jest.spyOn(console, "log").mockImplementation((message) => {
      logs += message;
    });
    const reader = readerMockFactory([(_question, callback) => callback(99)]);
    numberGame(reader);
    expect(logs).toMatch(/too high/i);
    fakeLog.mockRestore();
  });

  it("Should handle 'out of range' numbers", () => {
    let logs = "";
    fakeLog = jest.spyOn(console, "log").mockImplementation((message) => {
      logs += message;
    });
    const reader = readerMockFactory([(_question, callback) => callback(123)]);
    numberGame(reader);
    expect(logs).toMatch(/number is between/i);
    fakeLog.mockRestore();
  });

  it("Should handle the good number", () => {
    let logs = "";
    fakeLog = jest.spyOn(console, "log").mockImplementation((message) => {
      logs += message;
    });
    const reader = readerMockFactory([(_question, callback) => callback(42)]);
    numberGame(reader);
    expect(logs).toMatch(/won/i);
    fakeLog.mockRestore();
  });

  it("Should be able to change min and max", () => {
    let logs = "";
    fakeLog = jest.spyOn(console, "log").mockImplementation((message) => {
      logs += message;
    });
    const reader = readerMockFactory([(_question, callback) => callback(42)]);
    numberGame(reader, 42, 42);
    expect(logs).toMatch(/won/i);
    fakeLog.mockRestore();
  });

  it("Should print the number of attempts the user made to win", () => {
    let logs = "";
    fakeLog = jest.spyOn(console, "log").mockImplementation((message) => {
      logs += message;
    });
    const reader = readerMockFactory([(_question, callback) => callback(1), (_question, callback) => callback(42)]);

    numberGame(reader);
    expect(logs).toMatch("2");
    fakeLog.mockRestore();
  });
});
