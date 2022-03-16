import { greetEveryone } from "./greetEveryone";
import { contextFunction } from "./context";

contextFunction(greetEveryone, ["Dupont", "Dupond"]);
// Should print :
/*
We now greet:
Welcome to Dupont
Welcome to Dupond
*/
