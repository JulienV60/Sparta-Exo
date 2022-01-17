const onlyMyTips = require("../src/index");

test("It should filter if `waiter` has the value 'Yourself'", () => {
  expect.assertions(1);

  const invoices = [
    { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
    { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
    { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
    { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
    { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
    { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
    { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
  ];

  const tips = onlyMyTips(invoices);

  expect(tips).toHaveLength(4);
});

test("It should only give back the tips", () => {
  expect.assertions(1);

  const invoices = [
    { clients: 3, waiter: "Yourself", price: 5100, tip: 210 },
    { clients: 3, waiter: "Yourself", price: 5100, tip: 100 },
    { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
    { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
    { clients: 3, waiter: "Yourself", price: 5100, tip: 400 },
    { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
    { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
  ];

  const tips = onlyMyTips(invoices);

  expect(tips).toEqual([210, 100, 400, 100]);
});
