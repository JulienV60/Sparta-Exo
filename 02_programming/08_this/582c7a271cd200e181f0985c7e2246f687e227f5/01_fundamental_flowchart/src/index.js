const shouldIMakeATicket = require("./shouldIMakeATicket");

const answerOne = shouldIMakeATicket(true, 35, 10);

console.log(answerOne);
// Should console log "true"

const answerTwo = shouldIMakeATicket(true, 5, 15);

console.log(answerTwo);
// Should console log "false"
