import { dropAll, execP } from "./test-utils";
import { Db, MongoClient } from "mongodb";
import * as fs from "fs";
import * as path from "path";
import { getDatabaseUrl } from "../utils/getDatabaseUrl";
import "dotenv/config";
import { URL } from "url";

const urlObject = new URL(`${process.env.MONGODB_DATABASE_URL}`);
urlObject.pathname = `/test-create-a-database-on-atlas`;
const databaseUrl = urlObject.toString();

const baseOptions = {
  connectTimeoutMS: 5000,
  serverSelectionTimeoutMS: 5000,
};

async function initDatabase(): Promise<MongoClient> {
  const client = new MongoClient(databaseUrl, baseOptions);
  return client.connect();
}

jest.setTimeout(20000);

describe("Create a database on Atlas", () => {
  let client: MongoClient;
  let db: Db;

  beforeAll(async () => {
    try {
      client = await initDatabase();
      db = client.db("mongo-basics");
    } catch (error) {
      console.warn(error);
    }
  });

  beforeEach(async () => {
    if (db) {
      await dropAll(db);
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

  if (fs.existsSync(path.resolve(".env"))) {
    describe("'.env'", () => {
      it("Should be populated with the database url", () => {
        expect.assertions(1);

        const file = fs.readFileSync(path.resolve(".env"), "utf-8");
        const match = file.match(
          /export (?<variableName>MONGODB_DATABASE_URL)=(?<url>mongodb\+srv:\/\/(?<username>.+):(?<password>.+)@.*)/,
        );
        if (match) {
          const { groups } = match;
          expect(groups.variableName).toBe("MONGODB_DATABASE_URL");
        }
      });
    });
  }

  describe("Contact the Atlas cluster", () => {
    it("Should create a 'test' collection in the DB", async () => {
      expect.assertions(2);

      await db.createCollection("test");

      const collections = await db.listCollections().toArray();

      expect(collections.length).toBe(1);
      expect(collections[0].name).toBe("test");
    });
  });
});
