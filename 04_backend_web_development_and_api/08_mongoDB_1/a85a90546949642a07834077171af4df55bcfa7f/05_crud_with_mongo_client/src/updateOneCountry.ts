import { Collection, Db } from "mongodb";

export function updateOneCountry(db: Db) {
  return db
    .collection("worldAtlas")
    .updateOne({ name: "Australia" }, { $set: { capital: "Canberra" } })
    .then(() => {
      return db.collection("worldAtlas").findOne({ continent: "Oceania" });
    });
}
