const machine = {
  litersOfCoffee : 0,

  fillWithLitersOfCoffee : function (filled) {
    this.litersOfCoffee = this.litersOfCoffee + filled;
  },

  expresso : function () {
    if (this.litersOfCoffee >= 0.08) {
      this.litersOfCoffee = this.litersOfCoffee - 0.08;
      console.log(this.litersOfCoffee);
      return true;
    } else {
      return false;
    }
  },

  longCoffee : function () {
    if (this.litersOfCoffee >= 0.15) {
      this.litersOfCoffee = this.litersOfCoffee - 0.15;
      console.log(this.litersOfCoffee);
      return true;
    } else {
      return false;
    }
  },
};

module.exports = machine;
