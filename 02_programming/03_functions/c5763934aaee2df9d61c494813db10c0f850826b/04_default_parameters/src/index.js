function helloSpartan(name ="soldier") {
  // Code the function here.
  if(name==="soldier"){
    console.log("Hello soldier; not very talkative uh?");
  }
  return console.log(`Hello ${name}: glad to know your name!`);

}

// Do not remove last lines, it is for tests
module.exports = helloSpartan;
