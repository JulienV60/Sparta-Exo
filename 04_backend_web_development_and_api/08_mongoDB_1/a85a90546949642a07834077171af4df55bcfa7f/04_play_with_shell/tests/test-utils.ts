import { exec } from "child_process";
import { Db, Collection } from "mongodb";

export async function execP(cmd: string): Promise<{ stdout: string; stderr: string }> {
  return new Promise(function (resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          stdout: stdout.replace("\n", ""),
          stderr: stderr.replace("\n", ""),
        });
      }
    });
  });
}

export async function createCollection(db: Db, collectionName: string, options = {}): Promise<Collection> {
  return new Promise((resolve, reject) => {
    try {
      db.createCollection(collectionName, options).then((collection) => resolve(collection));
    } catch (error) {
      reject(error);
    }
  });
}
