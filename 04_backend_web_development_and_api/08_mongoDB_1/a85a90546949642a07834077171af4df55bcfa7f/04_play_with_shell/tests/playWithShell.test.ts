import { execP } from "./test-utils";
import { expectMessage } from "camp2-helpers";
import { countries } from "./countries";
import { Db, MongoClient } from "mongodb";
import "dotenv/config"
import { URL } from "url";

const urlObject = new URL(`${process.env.MONGODB_DATABASE_URL}`);
urlObject.pathname = `/test-play-with-shell`;
const testDatabaseUrl = urlObject.toString();

const baseOptions = {
  connectTimeoutMS: 5000,
  serverSelectionTimeoutMS: 5000,
};

async function initDatabase(): Promise<MongoClient> {
  const client = new MongoClient(testDatabaseUrl, baseOptions);

  return client.connect();
}

describe("Play with shell", () => {
  let client: MongoClient;
  let db: Db;

  beforeAll(async () => {
    jest.setTimeout(20000);
    try {
      client = await initDatabase();
      db = client.db();
    } catch (error) {
      console.error("Can't log to MongoDB Server: ", error);
    }
  });
  beforeEach(async () => {
    if (db) {
      try {
      await db.dropCollection("worldAtlas");
      } catch (error) {
        console.warn("This may not be an error if the tests pass", error)
      }
    }
  });
  afterAll(async () => {
    if (client) {
      await client.close();
    }
  });

  describe("createCollection", () => {
    it("Should create a 'worldAtlas' collection in the DB", async () => {
      expect.assertions(2);

      await execP(`mongosh "${testDatabaseUrl}" < src/createCollection.js`);

      const collections = await db.listCollections().toArray();

      expect(collections.length).toBe(1);
      expect(collections[0].name).toBe("worldAtlas");
    });
  });

  describe("insertOneCountry", () => {
    it("Should insert one country in the right collection", async () => {
      expect.assertions(1);

      await execP(`mongosh "${testDatabaseUrl}" < src/insertOneCountry.js`);

      const worldAtlasCollection = db.collection("worldAtlas");

      const result = await worldAtlasCollection.find().toArray();

      expect(result.length).toBe(1);
    });

    it("The country should have a 'name', a 'capital' and a 'continent'", async () => {
      expect.assertions(3);

      await execP(`mongosh "${testDatabaseUrl}" < src/insertOneCountry.js`);

      const worldAtlasCollection = db.collection("worldAtlas");

      const result = await worldAtlasCollection.find().toArray();

      expectMessage(result[0].name, "Your country has no name.").toBeTruthy();

      expectMessage(result[0].capital, "Your country has no capital.").toBeTruthy();

      expectMessage(result[0].continent, "Your country has no continent.").toBeTruthy();
    });
  });

  describe("insertManyCountries", () => {
    it("Should insert 3 new countries in the right collection", async () => {
      expect.assertions(1);

      await execP(`mongosh "${testDatabaseUrl}" < src/insertManyCountries.js`);

      const worldAtlasCollection = db.collection("worldAtlas");

      const result = await worldAtlasCollection.find().toArray();

      expectMessage(result.length === 3, "You should insert 3 new countries").toBe(true);
    });

    it("Each country should have a 'name', a 'capital' and a 'continent'", async () => {
      expect.assertions(9);

      await execP(`mongosh "${testDatabaseUrl}" < src/insertManyCountries.js`);

      const worldAtlasCollection = db.collection("worldAtlas");

      const result = await worldAtlasCollection.find().toArray();

      result.forEach((country) =>
        expectMessage(Object.keys(country), `Country ${result.indexOf(country) + 1} has no name.`).toContain("name"),
      );

      result.forEach((country) =>
        expectMessage(Object.keys(country), `Country ${result.indexOf(country) + 1} has no capital.`).toContain(
          "capital",
        ),
      );

      result.forEach((country) =>
        expectMessage(Object.keys(country), `Country ${result.indexOf(country) + 1} has no continent.`).toContain(
          "continent",
        ),
      );
    });
  });

  describe("findOneCountry", () => {
    it("Should find Iceland in the 'worldAtlas' collection", async () => {
      expect.assertions(1);

      const worldAtlasCollection = db.collection("worldAtlas");

      await worldAtlasCollection.insertMany(countries);

      const { stdout: result } = await execP(`mongosh "${testDatabaseUrl}" < src/findOneCountry.js`);
      expect(result.match(/name: 'Iceland',/)).not.toBeNull();
    });

    it("Should not find another country than Iceland", async () => {
      expect.assertions(1);

      const worldAtlasCollection = db.collection("worldAtlas");

      await worldAtlasCollection.insertMany(countries);

      const { stdout: result } = await execP(`mongosh "${testDatabaseUrl}" < src/findOneCountry.js`);

      expectMessage(
        result.match(/Germany|Italy|Belgium|France|Australia/),
        "Your shell command must search for Iceland only.",
      ).toBe(null);
    });
  });

  describe("findManyCountries", () => {
    it("Should find all the Europe countries in the 'worldAtlas' collection", async () => {
      expect.assertions(6);

      const worldAtlasCollection = db.collection("worldAtlas");

      await worldAtlasCollection.insertMany(countries);

      const { stdout } = await execP(`mongosh "${testDatabaseUrl}" < src/findManyCountries.js`);

      const regex = /\{[^}]*\}/gims;

      const result = stdout.match(regex);

      if (result) {
        expect(result.length).toBe(5);

        result.forEach((element) => {
          expect(element).toMatch(/^.*continent: 'Europe'.*$/ims);
        });
      }
    });
  });

  describe("updateOneCountry", () => {
    it("Should update the capital of Australia with 'Canberra'", async () => {
      expect.assertions(1);

      const worldAtlasCollection = db.collection("worldAtlas");

      await worldAtlasCollection.insertMany(countries);

      await execP(`mongosh "${testDatabaseUrl}" < src/updateOneCountry.js`);

      const result = await worldAtlasCollection.find({ name: "Australia" }).toArray();

      expect(result[0].capital).toBe("Canberra");
    });
  });

  describe("updateManyCountries", () => {
    it("Should replace 'Europe' by 'EU' in all European countries", async () => {
      expect.assertions(1);

      const worldAtlasCollection = db.collection("worldAtlas");

      await worldAtlasCollection.insertMany(countries);

      await execP(`mongosh "${testDatabaseUrl}" < src/updateManyCountries.js`);

      const result = await worldAtlasCollection.find({ continent: "EU" }).toArray();

      expect(result.length).toBe(5);
    });
  });

  describe("deleteOneCountry", () => {
    it("Should delete 'France' from the worldAtlas collection", async () => {
      expect.assertions(6);

      const worldAtlasCollection = db.collection("worldAtlas");

      await worldAtlasCollection.insertMany(countries);

      await execP(`mongosh "${testDatabaseUrl}" < src/deleteOneCountry.js`);

      const result = await worldAtlasCollection.find().toArray();

      expect(result.length).toBe(5);

      result.forEach((country) => expect(country.name).not.toBe("France"));
    });
  });

  describe("deleteManyCountries", () => {
    it("Should delete all the 'EU' countries from the worldAtlas collection", async () => {
      expect.assertions(1);

      const worldAtlasCollection = db.collection("worldAtlas");

      await worldAtlasCollection.insertMany(countries);

      await worldAtlasCollection.updateMany({ continent: "Europe" }, { $set: { continent: "EU" } });

      await execP(`mongosh "${testDatabaseUrl}" < src/deleteManyCountries.js`);

      const result = await worldAtlasCollection.find().toArray();

      expect(result.length).toBe(1);
    });
  });
});
