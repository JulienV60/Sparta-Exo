import * as mongo from "mongodb";

export const moviesValidator = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      additionalProperties: false,
      required: ["_id", "title", "genre", "year"],
      properties: {
        _id: { bsonType: "objectId" },
        title: { bsonType: "string" },
        genre: {
          bsonType: "string",
          enum: ["action", "comedy", "dramatic", "horror", "romance"],
          description: "Should be only a string in enum values and is required",
        },
        year: {
          bsonType: "int",
          minimum: 1950,
          maximum: 2020,
          description: "must be only an integer in [1950,2020] and is required",
        },
        ratings: {
          bsonType: "object",
          additionalProperties: false,
          required: ["pressRating", "spectatorsRating"],
          properties: {
            pressRating: {
              bsonType: "int",
              minimum: 1,
              maximum: 5,
              description: "Should be only an integer in[1,5] and is required",
            },
            spectatorsRating: {
              bsonType: "int",
              minimum: 1,
              maximum: 5,
              description: "Should be only an integer in [1,5] and is required",
            },
          },
        },
      },
    },
  },
};

export function createMoviesCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("movies", moviesValidator);
}
