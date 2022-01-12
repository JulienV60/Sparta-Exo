// > Frieda and Francis walk on the street. Frieda is 22 and Francis is 17.

// Create two objects, `frieda`, `francis` with the fields :
//   `age` (an integer) and `name`, (obviously a string)
const frieda = {
  name : "Frieda",
  age : 22
};
const francis = {
  name : "Francis",
  age : 17
};

// Create two variables `canFriedaDrinkAlcohol` and `canFrancisDrinkAlcohol` to answer,
// respectively, to the question "Can he / she drink alcohol?".

let canFriedaDrinkAlcohol=frieda.age>=18?true:false;
let canFrancisDrinkAlcohol=francis.age>=18?true:false;