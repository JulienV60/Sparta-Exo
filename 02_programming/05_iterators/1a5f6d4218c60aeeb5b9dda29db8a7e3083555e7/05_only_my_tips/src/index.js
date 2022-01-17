function onlyMyTips(invoices) {
  return invoices.filter(
    (invoices)=> invoices.waiter === "Yourself").map(invoice => invoice.tip);

}


const todaysInvoices = [
  { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
  { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
];
//console.log(onlyMyTips(todaysInvoices));
// Do not remove the following line, it is for tests
module.exports = onlyMyTips;
