const armoury = {
  spear: "Gungnir",
  hammer: "Mjöllnir",
  chain: "Gleipnir",
  sword: "Hofund",
  shoes: "Vidar's shoes",
  horn: "Gjallarhorn",
};

const odinRequest = "Mjöllnir";

// Code here a constant armouryWithNamesOnly bound to an array called that has all the values of the object armoury
// using the object method to get all values (google is your friend)

const armouryWithNamesOnly=Object.values(armoury);
console.log(armouryWithNamesOnly); 

// Create a constant isTheRequestInArmoury bound to the check of the presence
// of odinRequest in armouryWithNamesOnly
const isTheRequestInArmoury=armouryWithNamesOnly.includes(odinRequest);
// Create a condition that logs "Ah, I finally found something to hammer that nail into"
// if the isTheRequestInArmoury is true and "What do you want me to do with this?" if not
if(isTheRequestInArmoury !== true){
  console.log("What do you want me to do with this?");
}
else{
  console.log("Ah, I finally found something to hammer that nail into");
}