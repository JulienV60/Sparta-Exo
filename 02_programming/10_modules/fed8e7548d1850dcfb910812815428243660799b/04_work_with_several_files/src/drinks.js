function longCoffee(liter) {
  return this.serveACup(0.15);
}

function expresso(liter) {
  return this.serveACup(0.08);
}

export { longCoffee, expresso };
