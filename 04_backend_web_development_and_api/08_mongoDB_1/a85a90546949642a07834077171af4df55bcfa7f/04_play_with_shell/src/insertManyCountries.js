import "dotenv/config";

const allCountry = [
  {
    name: "Espagne",
    capital: "Madrid",
    continent: "Europe",
  },

  {
    name: "Italie",
    capital: "Rome",
    continent: "Europe",
  },
  {
    name: "England",
    capital: "London",
    continent: "BrexitLoL",
  },
];
db.worldAtlas.insertMany(allCountry);
