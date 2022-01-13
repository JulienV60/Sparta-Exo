function filteredRoles(personsArray,roles = "Teacher"){
  // Code the function here.
  const listOfPersons = [];

  if(personsArray[0].role === roles){
    listOfPersons.push({name:personsArray[0].name, role:roles});
  }

  if(personsArray[1].role === roles){
    listOfPersons.push({name:personsArray[1].name, role:roles});
  }

  if(personsArray[2].role === roles){
    listOfPersons.push({name:personsArray[2].name, role:roles});
  }

  if(personsArray[3].role === roles){
    listOfPersons.push({name:personsArray[3].name, role:roles});
  }

  return listOfPersons;
}

// Do not remove lines below, it is for tests
module.exports = filteredRoles;
