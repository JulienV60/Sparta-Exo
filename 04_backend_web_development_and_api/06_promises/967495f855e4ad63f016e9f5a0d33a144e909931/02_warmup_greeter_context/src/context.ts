type ParamRest = string[];
type CallbackType= (...restParam: ParamRest) => void;

export function contextFunction(callbackFunction : CallbackType, parameters: ParamRest): void {
  // Code your function here
}
