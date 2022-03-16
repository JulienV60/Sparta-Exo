import { customers } from "../data/customers";
import { filterByFirstLetter } from "./filter_by_first_letter";

console.log(filterByFirstLetter(customers, "J")); // Should return an array with all last names starting with the letter "J"
