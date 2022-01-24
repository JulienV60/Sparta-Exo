import arraysIntoObjects from "./arraysIntoObjects.js";

const newObject = arraysIntoObjects(["nom", "prenom", "age"], ["Capitaine", "Haddock", 55]);

console.log(newObject);

/* Should print
{
    nom: "Capitaine",
    prenom: "Haddock",
    age: 55
}
*/
