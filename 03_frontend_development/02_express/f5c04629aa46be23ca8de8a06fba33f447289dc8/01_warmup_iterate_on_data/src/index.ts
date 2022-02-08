// Code here
type CustomerType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
};
function getEmails(coucou: CustomerType[]): string[] {
  return coucou.map((element) => element.email);
}
export { getEmails };
