import { CollectionInfo, Db } from "mongodb";

export function showCollections(db: Db): Promise<(CollectionInfo | Pick<CollectionInfo, "name" | "type">)[]> {
  return db.listCollections().toArray();
}
