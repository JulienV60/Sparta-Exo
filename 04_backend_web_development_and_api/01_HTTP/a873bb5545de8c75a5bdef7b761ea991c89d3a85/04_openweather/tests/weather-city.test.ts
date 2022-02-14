jest.mock("@fewlines-education/request");
import { weatherByCity } from "../src/weather-city";
import { london } from "./data";
const request = require("@fewlines-education/request");

const mockedLondonRequest = (...params: ((arg0: null, arg1: string) => void)[]) => {
  params[params.length - 1](null, JSON.stringify(london));
};

const mockedErrorRequest = (...params: ((arg0: Error) => void)[]) => {
  params[params.length - 1](new Error("This is a fake error"));
};

describe("#WeatherByCity", () => {
  afterEach(() => {
    request.default.mockReset();
  });

  it("Must use the '@fewlines-education/request' package", async () => {
    expect.assertions(1);
    const spyLog = jest.spyOn(console, "log").mockImplementation();
    request.default.mockImplementationOnce(mockedLondonRequest);

    weatherByCity("London");

    expect(request.default).toHaveBeenCalled();
    spyLog.mockRestore();
  });

  test("The requested url must use 'process.env.OPENWEATHER_API_KEY' rather than hard coded api key", async () => {
    expect.assertions(1);

    const spyLog = jest.spyOn(console, "log").mockImplementation();
    request.default.mockImplementationOnce(mockedLondonRequest);
    process.env.OPENWEATHER_API_KEY = "toto";

    weatherByCity("London");

    expect(request.default.mock.calls[0][0]).toBe(
      "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=toto",
    );
    spyLog.mockRestore();
  });

  it("Must print the temperature in '°C' with 'console.log'", async () => {
    expect.assertions(1);

    const spyLog = jest.spyOn(console, "log").mockImplementation();
    request.default.mockImplementationOnce(mockedLondonRequest);

    weatherByCity("London");

    expect(spyLog).toHaveBeenCalledWith("12.4 °C");

    spyLog.mockRestore();
  });

  it("Throws a 'console.error' when the API respond with error", async () => {
    expect.assertions(1);

    const spyErrorLog = jest.spyOn(console, "error").mockImplementation();
    request.default.mockImplementationOnce(mockedErrorRequest);

    weatherByCity("London");

    expect(spyErrorLog).toHaveBeenCalled();

    spyErrorLog.mockRestore();
  });

  it("Must not print anything with 'console.log' when an error is throwned", async () => {
    expect.assertions(2);

    const spyLog = jest.spyOn(console, "log").mockImplementation();
    const spyErrorLog = jest.spyOn(console, "error").mockImplementation();
    request.default.mockImplementationOnce(mockedErrorRequest);

    weatherByCity("London");

    expect(spyLog).not.toHaveBeenCalled();
    expect(request.default).toHaveBeenCalled();

    spyErrorLog.mockRestore();
    spyLog.mockRestore();
  });
});
