const shouldIMakeATicket = require("../src/shouldIMakeATicket");

describe("#shouldIMakeATicket", () => {
  it("Should make a ticket if you're stuck for more or equal than 20 minutes", () => {

    expect(shouldIMakeATicket(true, 20, 11)).toBe(true);
    expect(shouldIMakeATicket(true, 25, 11)).toBe(true);

  });

  it("Should make a ticket if the teachers are available", () => {

    expect(shouldIMakeATicket(true, 100, 9)).toBe(true);
    expect(shouldIMakeATicket(true, 42, 13)).toBe(false);
    expect(shouldIMakeATicket(true, 25, 14)).toBe(true);
    expect(shouldIMakeATicket(true, 59, 18)).toBe(false);

  });
  
  it("Should not make a ticket if you aren't stuck", () => {

    expect(shouldIMakeATicket(false, 25, 14)).toBe(false);

  });

  it("Should not make a ticket if you are stuck less than 20 minutes", () => {

    expect(shouldIMakeATicket(false, 18, 14)).toBe(false);

  });

  it("Should not make a ticket if the teachers are unavailable", () => {

    expect(shouldIMakeATicket(true, 25, 8)).toBe(false);
    expect(shouldIMakeATicket(true, 25, 13)).toBe(false);
    expect(shouldIMakeATicket(true, 25, 20)).toBe(false);

  });

});
