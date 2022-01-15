let knowledge = {
  knowsJavascript: true,
  knowsTypescript: true,
  knowsReact: true,
  knowsNext: true,
  knowsMongoDB: true,
  timeSpent: "10 weeks",
};


let student = {
  knowsTypescript: false,
  knowsReact: false,
  knowsNext: false,
  knowsMongoDB: false,
  timeSpent: "4 days",
};

const developer ={
  ...student,
  hasComputer:true,
  ...knowledge,
  knowsJavascript: true,
  knowsTypescript: true,
  knowsReact: true,
  knowsNext: true,
  knowsMongoDB: true,
  timeSpent: "10 weeks",

}
;



console.log(developer);

let application,[bug,...code]= ["bug", "code", "code", "code", "code", "code", "code", "code", "code"];
let [head,rest]=[...bug,code];
console.log(bug);
console.log(code);

module.exports = {developer,bug,code,};
