import { column } from "./column"

console.log("A column of 2 stars")
console.log(column(2, "*"));
// Should print:
// *
// *

console.log("\nA column of 6 stars")
console.log(column(6, "*"));
// Should print:
// *
// *
// *
// *
// *
// *

console.log("\nA column of 4 %")
console.log(column(4, "%"));
// Should print:
// %
// %
// %
// %
