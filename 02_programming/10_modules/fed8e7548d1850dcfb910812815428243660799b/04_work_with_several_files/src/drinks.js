// There should be no import in this file. Only exports!
function expresso(litersOfCoffee) {
  return litersOfCoffee - 0.08;
}
function longCoffee(litersOfCoffee) {
  litersOfCoffee - 0.15;
  console.log(litersOfCoffee);
}

export { expresso, longCoffee };
