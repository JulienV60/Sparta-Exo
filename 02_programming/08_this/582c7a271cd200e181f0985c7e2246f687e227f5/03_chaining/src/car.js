// Complete and add needed car properties:
const car = {
  speed: 0,
  distance: 0,
  start: function () {
    this.speed = 0;
    this.distance = 0;
    return this;
  },
  changeSpeed: function (compteur) {
    this.speed = compteur;
    return this;
  },
  drive: function (minutes) {
    this.distance += (this.speed / 60) * minutes;

    return this;
  },
  showDistance: function () {
    console.log(this.distance + " Km");
    return this;
  },
};
module.exports = car;
