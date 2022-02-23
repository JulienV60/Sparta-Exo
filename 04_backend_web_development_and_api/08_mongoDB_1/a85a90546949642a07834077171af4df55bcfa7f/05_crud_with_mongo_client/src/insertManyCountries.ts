import { Db, ObjectId } from "mongodb";

export function insertManyCountries(db: Db, country: Db[]) {
  return db
    .collection("worldAtlas")
    .insertMany(country)
    .then((resultat) => {
      return resultat.insertedCount;
    });
}
