import "dotenv/config";

db.worldAtlas.updateOne({ name: "Australia" }, { $set: { capital: "Canberra" } });
