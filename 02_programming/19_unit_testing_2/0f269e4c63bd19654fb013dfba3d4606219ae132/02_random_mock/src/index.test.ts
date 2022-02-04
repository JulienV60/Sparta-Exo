import { getRandomUser } from "./index";

test("Function Random", () => {
  expect.assertions(1);
  const spy = jest.spyOn(Math, "random");
  spy.mockImplementation(() => 50);
  getRandomUser(["Frieda", "Francis", "Frederic"]);

  expect(spy).toHaveBeenCalledWith();

  spy.mockRestore();
});
