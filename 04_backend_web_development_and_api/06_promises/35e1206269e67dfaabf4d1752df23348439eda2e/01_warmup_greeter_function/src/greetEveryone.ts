type ParamRest = string[];

export function greetEveryone(...hello: ParamRest): void {
  return console.log("Welcome" + hello);
}
