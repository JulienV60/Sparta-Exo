function filteredRoles(persons,role="Teacher"){
  const filteredPersons=[];

  if (persons[0].role === role){
    filteredPersons.push(persons[0]);
  }

  if (persons[1].role === role){
    filteredPersons.push(persons[1]);
  }

  if (persons[2].role === role){
    filteredPersons.push(persons[2]);
  }

  if (persons[3].role === role){
    filteredPersons.push(persons[3]);
  }
  return filteredPersons;

}

const myPersons= [
  { name : "Julien" ,role : "Student" },
  { name : "Maxime" ,role : "Student" },
  { name : "Vincent",role : "Teacher" },
  { name : "Laurent",role : "Student" },
];
const myFilteredRoles=filteredRoles(myPersons,"Student");
console.log(myFilteredRoles);



// Do not remove lines below, it is for tests
module.exports = filteredRoles;

