import { Db, ObjectId } from "mongodb";
import "dotenv/config";

export function insertOneCountry(db: Db, country: ObjectId) {
  return db
    .collection("worldAtlas")
    .insertOne(country)
    .then((resultat) => {
      return resultat.insertedId;
    });
}
