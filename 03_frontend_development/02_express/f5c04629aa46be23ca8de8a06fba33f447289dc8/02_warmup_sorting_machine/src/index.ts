// Code here
function sortingMachine(nombre: number[], vrai: boolean): number[] {
  if (vrai === true) {
    return nombre.sort((un, deux) => un - deux);
  } else {
    return nombre.sort((un, deux) => deux - un);
  }
}

export { sortingMachine };
