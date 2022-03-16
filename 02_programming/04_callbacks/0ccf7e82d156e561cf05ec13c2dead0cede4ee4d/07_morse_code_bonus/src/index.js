const decodeMorse = require("./decodeMorse");

const morseCode = ".... . -.--   .--- ..- -.. .";
const decoded = decodeMorse(morseCode, 0, "");

console.log(decoded);
