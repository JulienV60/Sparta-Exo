import moment from "moment";
import { Accueil, listOfCustomers } from "./index.js";

function Acces(reader, listOfCustomers) {
  console.log("*******************************************************");
  console.log("CHOOSE A CUSTOMER");
  console.log("*******************************************************\n");
  listOfCustomers.forEach((element, index) => {
    console.log(`${index + 1} - ${element.FirstName} ${element.LastName}`);
  });

  reader.question("\n\ud83e\udd16 Choose a customer\n> ", (reponseCustomer) => {
    if (reponseCustomer === "O") {
      Acces(reader, listOfCustomers);
    } else {
      AccesCustomer(reader, listOfCustomers[reponseCustomer - 1]);
    }
  });
}

function AccesCustomer(reader, oneConsumer) {
  console.log("*******************************************************");
  console.log(oneConsumer.FirstName, oneConsumer.LastName);
  console.log("*******************************************************\n");

  console.log("1 - Show Account");
  console.log("2 - Add purchase");
  console.log("3 - Use loyalty points");
  console.log("4 - Show purchase history");
  console.log("5 - Choose another customer");
  console.log("6 - Back to Menu");
  console.log("7 - Quit\n");
  reader.question(
    `\ud83e\udd16Choose an action for ${oneConsumer.FirstName} ${oneConsumer.LastName}\n>`,
    (reponseAccesCustomer) => {
      if (reponseAccesCustomer === "1") {
        ShowAccount(reader, oneConsumer);
      }
      if (reponseAccesCustomer === "2") {
        AddPurchase(reader, oneConsumer);
      }
      if (reponseAccesCustomer === "3") {
        console.log("Category in Progress");
      }
      if (reponseAccesCustomer === "4") {
        ShowPurChaseHistory(reader, oneConsumer);
      }
      if (reponseAccesCustomer === "5") {
        Acces(reader, listOfCustomers);
      }
      if (reponseAccesCustomer === "6") {
        Accueil(reader);
      }
      if (reponseAccesCustomer === "7") {
        reader.close();
      }
    },
  );

  function ShowAccount(reader, oneConsumer) {
    console.log("*******************************************************");
    console.log(oneConsumer.FirstName, oneConsumer.LastName);
    console.log("*******************************************************\n");
    console.log("Customer information");
    console.log(`Name:            ${oneConsumer.FirstName} ${oneConsumer.LastName}`);
    console.log(`Adress:\n- City:             ${oneConsumer.City}\n- Country:           ${oneConsumer.Country} `);
    console.log(`Total purchase:      ${oneConsumer.purchase}`);
    console.log(`Loyalty points:      ${oneConsumer.loyalty}`);
    reader.question("Press any 'r' for return at Customer's Menu \n>", (custom) => {
      if (custom === "r") {
        AccesCustomer(reader, oneConsumer);
      }
    });
  }
  function AddPurchase(reader, oneConsumer) {
    console.log("*******************************************************");
    console.log(oneConsumer.FirstName, oneConsumer.LastName, "---> ADD PURCHASE");
    console.log("*******************************************************\n\n");
    reader.question("\ud83e\udd16 Purchase amount\n> ", (addamount) => {
      reader.question("Press any 'r' for return at Customer's Menu \n>", (custom) => {
        if (custom === "r") {
          oneConsumer.purchase += addamount;
          moment().format("L");
          AccesCustomer(reader, oneConsumer);
        }
      });
    });
  }

  function ShowPurChaseHistory(reader, oneConsumer) {
    console.log("plop");
  }
}

export { Acces };
