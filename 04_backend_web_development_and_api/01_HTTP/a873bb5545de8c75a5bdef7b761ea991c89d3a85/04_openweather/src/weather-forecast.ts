import request from "@fewlines-education/request";
import "dotenv/config";

function weatherByZipcode(zipcode: string, countryCode: string) {
  request(
    `http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${countryCode}&units=metric&cnt=16&appid=${process.env.OPENWEATHER_API_KEY}`,
    (error, html) => {
      if (error) {
        return console.error(error);
      } else {
        const json = JSON.parse(html);
        console.log(json);
      }
    },
  );
}

function weatherByLatitudeAndLongitude(latitude: number, longitude: number) {
  request(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&cnt=16&appid=${process.env.OPENWEATHER_API_KEY}`,
    (error, html) => {
      if (error) {
        return console.error(error);
      } else {
        const json = JSON.parse(html);
        return console.log("Weather for " + json.city.name);
      }
    },
  );
}

// leave lines below for tests to work properly
export { weatherByZipcode, weatherByLatitudeAndLongitude };
("http://api.openweathermap.org/data/2.5/forecast?lat=32.661343&lon=51.680374&units=metric&cnt=16&appid=toto");
