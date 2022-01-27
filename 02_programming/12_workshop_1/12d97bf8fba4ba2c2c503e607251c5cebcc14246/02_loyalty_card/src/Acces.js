import { Accueil } from "./index.js";

function Acces(reader, listOfCustomers) {
  console.log("*******************************************************\n");
  console.log("CHOOSE A CUSTOMER");
  console.log("*******************************************************\n");
  listOfCustomers.forEach((element, index) => {
    console.log(`${index + 1} - ${element.FirstName} ${element.LastName}`);
  });
}

export { Acces };
