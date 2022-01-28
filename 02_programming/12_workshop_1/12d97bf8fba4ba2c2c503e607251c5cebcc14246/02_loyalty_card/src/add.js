import { Accueil } from "./index.js";
function Add(reader, listOfCustomers) {
  const customer = {};

  reader.question("\ud83e\udd16 - first name:> \n> ", (firstname) => {
    customer.FirstName = firstname;

    reader.question("\ud83e\udd16 - last name:> \n> ", (lastname) => {
      customer.LastName = lastname;

      reader.question("\ud83e\udd16 - email:> \n> ", (email) => {
        customer.Email = email;

        reader.question("\ud83e\udd16 - birth date:> \n> ", (birthdate) => {
          customer.BirthDate = birthdate;

          reader.question("\ud83e\udd16 - city:> \n> ", (city) => {
            customer.City = city;

            reader.question("\ud83e\udd16 - country:> \n> ", (country) => {
              customer.Country = country;
              listOfCustomers.push(customer);

              Accueil(reader);
            });
          });
        });
      });
    });
  });
}

export { Add };
