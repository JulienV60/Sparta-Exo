import { Db, MongoClient } from "mongodb";
import { countries } from "../utils/countries";
import { findManyCountries } from "../src/findManyCountries";
import { findOneCountry } from "../src/findOneCountry";
import { deleteManyCountries } from "../src/deleteManyCountries";
import { deleteOneCountry } from "../src/deleteOneCountry";
import { dropAll } from "./test-utils";
import { insertOneCountry } from "../src/insertOneCountry";
import { insertManyCountries } from "../src/insertManyCountries";
import { updateManyCountries } from "../src/updateManyCountries";
import { updateOneCountry } from "../src/updateOneCountry";
import "dotenv/config";
import { URL } from "url";

const urlObject = new URL(`${process.env.MONGODB_DATABASE_URL}`);
urlObject.pathname = `/test-crud-with-client`;
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

  const countryKeys = ["_id", "name", "capital", "continent"];

  beforeAll(async () => {
    jest.setTimeout(20000);
    try {
      client = await initDatabase();
      db = client.db();
    } catch (error) {
      console.log("Can't log to MongoDB Server, did you start it?");
    }
  });
  beforeEach(async () => {
    if (db) {
      await dropAll(db);
      await db.collection("worldAtlas").insertMany(countries);
    }
  });
  afterAll(async () => {
    if (db) {
      await dropAll(db);
    }
    if (client) {
      await client.close();
    }
  });

  describe("findOneCountry", () => {
    it("Should return an object", async () => {
      expect.assertions(1);

      const result = await findOneCountry(db);
      expect(result !== null && typeof result === "object").toBe(true);
    });

    it("Should return Iceland from the 'worldAtlas' collection", async () => {
      expect.assertions(4);

      const result = await findOneCountry(db);

      expect(Object.keys(result)).toContain("_id");
      expect(result.name).toBe("Iceland");
      expect(result.capital).toBe("Reykjavik");
      expect(result.continent).toBe("Europe");
    });
  });

  describe("findManyCountries", () => {
    it("Should return an array of country objects", async () => {
      expect.assertions(1);

      const result = await findManyCountries(db);
      expect(Array.isArray(result)).toBe(true);
    });

    it("Should return all the european countries from the 'worldAtlas' collection", async () => {
      expect.assertions(11);

      const result = await findManyCountries(db);
      expect(result.length).toBe(5);

      result.forEach((country) => {
        expect(Object.values(country)).toContain("Europe");
        expect(Object.values(country)).not.toContain("Oceania");
      });
    });
  });

  describe("insertOneCountry", () => {
    it("Should insert a new country in the 'worldAtlas' collection", async () => {
      const newCountry = {
        name: "Canada",
        capital: "Toronto",
        continent: "North America",
      };
      await insertOneCountry(db, newCountry);
      expect((await db.collection("worldAtlas").find().toArray()).length).toBe(7);
    });

    it("Should return an object", async () => {
      const newCountry = {
        name: "Canada",
        capital: "Toronto",
        continent: "North America",
      };
      const result = await insertOneCountry(db, newCountry);
      expect(result !== null && typeof result === "object").toBe(true);
    });

    it("Should return the inserted country new ID", async () => {
      const newCountry = {
        name: "Canada",
        capital: "Toronto",
        continent: "North America",
      };
      const result = await insertOneCountry(db, newCountry);
      const lastEntry = (await db.collection("worldAtlas").find().sort({ _id: 1 }).toArray()).pop();

      expect(result.toString()).toBe(lastEntry._id.toString());
    });
  });

  describe("insertManyCountries", () => {
    it("Should insert at least 2 new coutnries in the 'worldAtlas' collection", async () => {
      expect.assertions(1);
      const newCountries = [
        {
          name: "Japan",
          capital: "Tokyo",
          continent: "Asia",
        },
        {
          name: "China",
          capital: "Beijing",
          continent: "Asia",
        },
        {
          name: "South Korea",
          capital: "Seoul",
          continent: "Asia",
        },
      ];

      await insertManyCountries(db, newCountries);
      expect((await db.collection("worldAtlas").find().toArray()).length > 7).toBe(true);
    });

    it("Should return the number of countries added", async () => {
      expect.assertions(1);

      const newCountries = [
        {
          name: "Japan",
          capital: "Tokyo",
          continent: "Asia",
        },
        {
          name: "China",
          capital: "Beijing",
          continent: "Asia",
        },
        {
          name: "South Korea",
          capital: "Seoul",
          continent: "Asia",
        },
      ];
      const result = await insertManyCountries(db, newCountries);
      expect(result).toBe(3);
    });
  });

  describe("updateOneCountry", () => {
    it("Should update the capital of Australia", async () => {
      expect.assertions(1);

      await updateOneCountry(db);
      const australia = await db.collection("worldAtlas").findOne({ name: "Australia" });

      expect(australia.capital).toBe("Canberra");
    });

    it("Should return an object", async () => {
      expect.assertions(1);

      const result = await updateOneCountry(db);
      expect(result !== null && typeof result === "object").toBe(true);
    });

    it("Should return the updated country", async () => {
      expect.assertions(1);

      const result = await updateOneCountry(db);
      const updatedCountry = await db.collection("worldAtlas").findOne({ capital: "Canberra" });

      expect(result).toEqual(updatedCountry);
    });
  });

  describe("updateManyCountries", () => {
    it("Should update all the european countries continent name with 'EU'", async () => {
      expect.assertions(1);

      await updateManyCountries(db);
      const europeanCountries = await db.collection("worldAtlas").find({ continent: "EU" }).toArray();

      expect(europeanCountries.length).toBe(5);
    });

    it("Should return an array of country objects", async () => {
      expect.assertions(1);

      const result = await updateManyCountries(db);
      expect(Array.isArray(result)).toBe(true);
    });

    it("Should return all the updated countries", async () => {
      expect.assertions(1);

      const result = await updateManyCountries(db);

      const updatedCountries = await db.collection("worldAtlas").find({ continent: "EU" }).toArray();

      expect(result).toEqual(updatedCountries);
    });
  });

  describe("deleteOneCountry", () => {
    it("Should delete `France` from the `worldAtlas` collection", async () => {
      expect.assertions(1);

      await deleteOneCountry(db);

      expect(await db.collection("worldAtlas").findOne({ name: "France" })).toBe(null);
    });

    it("Should not delete any other country", async () => {
      expect.assertions(1);

      await deleteOneCountry(db);
      expect((await db.collection("worldAtlas").find().toArray()).length).toBe(5);
    });

    it("Should return true when deletion is successfull", async () => {
      expect.assertions(1);

      const result = await deleteOneCountry(db);
      expect(result).toBe(true);
    });

    it("Should return false when deletion isn't successfull", async () => {
      expect.assertions(1);

      await deleteOneCountry(db);
      const result = await deleteOneCountry(db);
      expect(result).toBe(false);
    });
  });

  describe("deleteManyCountries", () => {
    it("Should delete all the european countries from the `worldAtlas` collection", async () => {
      expect.assertions(1);

      await deleteManyCountries(db);
      const result = await db.collection("worldAtlas").find({ continent: "Europe" }).toArray();
      expect(result).toEqual([]);
    });

    it("Should not delete any non european country", async () => {
      expect.assertions(1);

      await deleteManyCountries(db);
      expect((await db.collection("worldAtlas").find().toArray()).length).toBe(1);
    });

    it("Should return true when deletion is successfull", async () => {
      expect.assertions(1);

      const result = await deleteManyCountries(db);
      expect(result).toBe(true);
    });

    it("Should return false when deletion isn't successfull", async () => {
      expect.assertions(1);

      await deleteManyCountries(db);
      const result = await deleteManyCountries(db);
      expect(result).toBe(false);
    });
  });
});
