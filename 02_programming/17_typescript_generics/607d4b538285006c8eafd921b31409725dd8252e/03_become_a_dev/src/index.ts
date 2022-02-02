type Human = {
  name: string;
  age: number;
  knowsDev: boolean;
};
type Dev = Human & {
  knownLanguage: string;
};

function becomeADev(hello: Human): Dev {
  hello.knowsDev = true;
  hello.knownLanguage = "JavaScript";
  return hello;
}

// Leave the line below for tests to work properly.
export { becomeADev };
