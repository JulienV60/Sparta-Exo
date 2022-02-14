import request from "@fewlines-education/request";
import "dotenv/config";

function weatherByCity(city: string) {
  request(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`,
    (error, html) => {
      if (error) {
        return console.error(error);
      } else {
        const json = JSON.parse(html);
        return console.log(json.main.temp + " °C");
      }
    },
  );
}
// code the function here

// leave lines below for tests to work properly
export { weatherByCity };
