import { Db } from "mongodb";

export function updateManyCountries(db: Db) {
  return db
    .collection("worldAtlas")
    .updateMany({ continent: "Europe" }, { $set: { continent: "EU" } })
    .then(() => {
      return db.collection("worldAtlas").find({ continent: "EU" }).toArray();
    });
}
