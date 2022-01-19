const readyForm = require("../src/readyForm");
const readline = require("readline");
const helpers = require("camp2-helpers");

const readerMockFactory = (mocks) => {
  const question = jest.fn();
  mocks.forEach((mock) => question.mockImplementationOnce(mock));
  readline.createInterface = jest.fn().mockReturnValue({
    close: jest.fn().mockImplementationOnce(() => undefined),
    question,
  });
  return readline.createInterface();
};
const answer = "hardly ready";
const answerMock = (_question, callback) => callback(answer);


describe("Ready form", () => {
  let fakeLog;

  beforeEach(() => {
    fakeLog = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    fakeLog.mockRestore();
  });

  it("Should ask the user if they are ready", () => {
    expect.assertions(1);
    const reader = readerMockFactory([
      (askReady, callback) => {
        expect(askReady.match(/ready/ig)).not.toBe(null);
        callback(answer);
      },
    ]);

    readyForm(reader);
  });

  it("Should use the user's answer in the final sentence", () => {
    const reader = readerMockFactory([answerMock]);
    readyForm(reader);
    expect(fakeLog).toHaveBeenCalledWith(expect.stringMatching(answer))
  });
});
