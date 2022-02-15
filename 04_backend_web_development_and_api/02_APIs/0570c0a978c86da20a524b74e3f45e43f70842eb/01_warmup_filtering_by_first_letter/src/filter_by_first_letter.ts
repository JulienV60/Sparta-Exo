import { Customer } from "../data/customers";

export function filterByFirstLetter(customers: Customer[], letter: string): Customer[] {
  const result = customers.filter((element) => element.last_name.startsWith(letter));
  return result;
}
