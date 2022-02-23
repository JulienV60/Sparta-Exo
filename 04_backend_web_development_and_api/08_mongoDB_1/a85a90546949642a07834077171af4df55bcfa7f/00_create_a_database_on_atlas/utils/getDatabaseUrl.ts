import { URL } from "url";

const getDatabaseUrl = ({ testEnvironment } = { testEnvironment: false }): string => {
  if (process.env.CI_MONGODB_DATABASE_URL) {
    return process.env.CI_MONGODB_DATABASE_URL;
  }
  if (process.env.MONGODB_DATABASE_URL) {
    const match = process.cwd().match(/.*\/(?<exerciseName>\w*)/);
    if (match) {
      if (match && match.groups && match.groups.exerciseName) {
        const {
          groups: { exerciseName },
        } = match;
        const urlObject = new URL(process.env.MONGODB_DATABASE_URL);
        urlObject.pathname = `/${testEnvironment ? "test-" : ""}${exerciseName}`;
        return urlObject.toString();
      }
    }
    throw new Error("⚠️  Exercise name not found. Are you in the right folder?");
  }
  throw new Error("⚠️  No `MONGODB_DATABASE_URL` environment variable found.\nDid you 'source .env_vars'?");
};

export { getDatabaseUrl };
