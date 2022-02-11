// Code here
type Data = [[string, string, string], [number, number, number], [boolean, boolean, boolean]];

function slotMachine(exact: Data): boolean {
  if (exact[0] === exact[1] && exact[1] === exact[2]) {
    return true;
  } else {
    return false;
  }
}

export { slotMachine };
