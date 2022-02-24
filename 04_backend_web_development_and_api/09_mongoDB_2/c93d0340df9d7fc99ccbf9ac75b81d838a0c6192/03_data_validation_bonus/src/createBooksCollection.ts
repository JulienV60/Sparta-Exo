import * as mongo from "mongodb";

export const booksValidator = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      additionalProperties: false,
      required: ["_id", "title", "author", "description"],
      properties: {
        _id: { bsonType: "objectId" },
        title: { bsonType: "string" },
        author: { bsonType: "string" },
        description: { bsonType: "string", maxLength: 100 },
      },
    },
  },
};

export function createBooksCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("books", booksValidator);
}
