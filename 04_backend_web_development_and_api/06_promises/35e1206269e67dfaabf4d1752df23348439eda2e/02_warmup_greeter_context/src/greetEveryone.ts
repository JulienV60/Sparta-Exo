type ParamRest = string[];

export function greetEveryone(...hello: ParamRest): void {
  console.log("Welcome " + hello);
}
