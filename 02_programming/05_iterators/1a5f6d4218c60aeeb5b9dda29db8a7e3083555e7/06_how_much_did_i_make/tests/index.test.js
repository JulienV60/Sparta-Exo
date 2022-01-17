const howMuchDidIMake = require("../src/index");

test("It should return a number", () => {
  expect.assertions(2);

  const invoices = [
    { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
    { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
    { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
    { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
    { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
    { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
    { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
  ];

  const tips = howMuchDidIMake(invoices);

  expect(typeof tips).toBe("number");
  expect(Number.isNaN(tips)).not.toBe(true);
});

test("It should return the sum of the tips for waiter Yourself", () => {
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

  const tips = howMuchDidIMake(invoices);

  expect(tips).toBe(810);
});
