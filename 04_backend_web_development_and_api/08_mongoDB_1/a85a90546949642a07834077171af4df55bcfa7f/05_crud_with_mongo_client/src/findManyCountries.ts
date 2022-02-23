import { Db } from "mongodb";
import "dotenv/config";
export function findManyCountries(db: Db) {
  return db.collection("worldAtlas").find({ continent: "Europe" }).toArray();
}
