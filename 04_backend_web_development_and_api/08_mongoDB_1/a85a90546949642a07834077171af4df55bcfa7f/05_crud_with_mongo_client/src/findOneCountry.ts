import { Db, MongoClient } from "mongodb";
import "dotenv/config";

export function findOneCountry(db: Db) {
  return db.collection("worldAtlas").findOne({ name: "Iceland" });
}
