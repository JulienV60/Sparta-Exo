import { dropAll } from "../tests/test-utils";
import { MongoClient } from "mongodb";
import "dotenv/config";

const client: MongoClient = new MongoClient(`${process.env.MONGODB_DATABASE_URL}`);
client
  .connect()
  .then(async (client: MongoClient) => {
    await dropAll(client.db());
    client.close();
  })
  .catch(console.error);
