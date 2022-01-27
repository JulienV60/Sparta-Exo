const humanFactory = (humanData = {}) => {
  const ht = {
    toString: function () {
      return "something";
    },
    human: {
      firstName: "John",
      lastName: "Doe",
      genre: "male",
      job: "unemployed",
      fullname: function () {
        return `${this.firstName}${this.lastName}`;
      },
      introduction: function () {
        return `Hello! My name is ${this.firstName}${this.lastName}`;
      },
    },
  };
};

const createHumans = () => {};

module.exports = {
  humanFactory,
  createHumans,
};
