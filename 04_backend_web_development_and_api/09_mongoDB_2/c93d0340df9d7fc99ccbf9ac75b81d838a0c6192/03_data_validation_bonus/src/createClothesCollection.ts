import * as mongo from "mongodb";

export const sweaterProperties = {
  additionalProperties: false,
  bsonType: "object",
  required: ["_id", "name", "color", "category", "size"],
  properties: {
    _id: { bsonType: "objectId" },
    name: { bsonType: "string", maxLength: 30 },
    color: { bsonType: "string", maxLength: 15 },
    category: {
      bsonType: "string",
      enum: ["sweater"],
      description: "Should be only a string in enum values and is required",
    },
    size: {
      bsonType: "string",
      enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      description: "Should be only a string in enum values and is required",
    },
  },
};

export const shoesProperties = {
  additionalProperties: false,
  bsonType: "object",
  required: ["_id", "name", "color", "category", "size"],
  properties: {
    _id: { bsonType: "objectId" },
    name: { bsonType: "string", maxLength: 30 },
    color: { bsonType: "string", maxLength: 15 },
    category: {
      bsonType: "string",
      enum: ["shoes"],
      description: "Should be only a string in enum values and is required",
    },
    size: {
      bsonType: "int",
      minimum: 30,
      maximum: 50,
      description: "Should be only an integer in[30,50] and is required",
    },
    material: {
      bsonType: "string",
      required: ["leather", "textile", "synthetic"],
      enum: ["leather", "textile", "synthetic"],
      description: "Should be only a string in enum values and is required",
    },
  },
};

export const pantsProperties = {
  additionalProperties: false,
  bsonType: "object",
  required: ["_id", "name", "color", "category", "size"],
  properties: {
    _id: { bsonType: "objectId" },
    name: { bsonType: "string", maxLength: 30 },
    color: { bsonType: "string", maxLength: 15 },
    category: {
      bsonType: "string",
      enum: ["pants"],
      description: "Should be only a string in enum values and is required",
    },
    size: {
      bsonType: "object",
      additionalProperties: false,
      required: ["width"],
      properties: {
        width: { bsonType: "int", minimum: 32, maximum: 46 },

        cut: {
          bsonType: "string",
          required: ["slim", "skinny", "regular", "straight"],
          enum: ["slim", "skinny", "regular", "straight"],
          description: "Should be only a string in [slim, skinny, regular, straight], and is required",
        },
      },
    },
  },
};

export const clothesValidator = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      oneOf: [sweaterProperties, shoesProperties, pantsProperties],
    },
  },
};

export function createClothesCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("clothes", clothesValidator);
}
