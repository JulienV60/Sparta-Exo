import { Db } from "mongodb";

export function deleteOneCountry(db: Db) {
  return db
    .collection("worldAtlas")
    .deleteOne({ name: "France" })
    .then((result) => {
      if (result.deletedCount === 1) {
        return true;
      } else {
        return false;
      }
    });
}
