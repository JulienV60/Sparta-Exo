let chosenCar = "Fiat Multipla";
//  Code here a switch statement that will:
//  log "Wonderful and well made!" when the expression is "Nissan Cube"
//  log "The most iconic Italian car! I can sell it for 50 percent less, just for you!" when the expression is "Fiat Multipla"
//  log "There's no better car to go to the beach! 😎" when the expression is "Fiat 600 Multipla Marinella"
//  log "It's the PlayStation 5 of the car, enjoy!" when the expression is "Nissan S-Cargo"
//  log "Ahhh, the Soviet Union car! Good choice!" when the expression is "Lada Riva"
//  log "We don't have this model here, we only sell the best quality!" when the expression is not listed in the cases

switch (chosenCar) {
  case "Nissan Cube" : 
    console.log("Wonderful and well made!");
    break;
  case "Fiat Multipla" :
    console.log("The most iconic Italian car! I can sell it for 50 percent less, just for you!");
    break;
  case "Fiat 600 Multipla Marinella":
    console.log("There's no better car to go to the beach! 😎");
    break;
  case "Nissan S-Cargo":
    console.log("It's the PlayStation 5 of the car, enjoy!" );
    break;
  case "Lada Riva":
    console.log("Ahhh, the Soviet Union car! Good choice!");
    break;
  default:
    console.log("We don't have this model here, we only sell the best quality!");
    break;
}