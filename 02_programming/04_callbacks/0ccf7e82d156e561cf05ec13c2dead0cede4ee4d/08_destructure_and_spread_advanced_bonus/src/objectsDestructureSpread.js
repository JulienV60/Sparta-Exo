function getConfig(config) {
  const defaultConfig = {
    user: {
      name: "root",
      password: "admin",
    },
    hardware: {
      CPUThreads: 4,
      memory: 2,
      diskSpace: 20,
    },
  };

  return /** Complete here */;
}

function logInfos(user) {
  const redactedUser = {
    firstName: "<REDACTED>",
    lastName: "<REDACTED>",
    address: {
      city: "<REDACTED>",
      country: "<REDACTED>",
    },
  };

  let {
    firstName,
    lastName,
    address: { city, country },
  } = user; // Change here

  console.log(`${firstName} ${lastName} lives in ${city}, ${country}.`);
}

module.exports = {
  getConfig,
  logInfos,
};
