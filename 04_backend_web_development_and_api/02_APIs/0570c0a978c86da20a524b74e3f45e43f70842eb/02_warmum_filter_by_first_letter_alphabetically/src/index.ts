import { Customer } from "../data/customers";

export function filterByFirstLetterOrdered(customers: Customer[], letter: string): Customer[] {
  const result = customers.filter((element) => element.last_name.startsWith(letter));
  function compare(a: Customer, b: Customer) {
    if (a.last_name < b.last_name) {
      return -1;
    }
    if (a.last_name > b.last_name) {
      return 1;
    }
    return 0;
  }
  return result.sort(compare);
}
