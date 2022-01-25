function putLitersOfCoffee(litersOfCoffee) {
  this.litersOfCoffee = this.litersOfCoffee + litersOfCoffee;
}

function consumeLitersOfCoffee(litersOfCoffee) {
  this.litersOfCoffee = this.litersOfCoffee - litersOfCoffee;
}

export { putLitersOfCoffee, consumeLitersOfCoffee };
