import { helloSailor } from "./index";
test("Function work", () => {
  const faleMpg = jest.spyOn(console, "log");
  helloSailor();
  expect(faleMpg).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
});
test("Function work with parameter", () => {
  const faleMpg = jest.spyOn(console, "log");
  helloSailor("CaptainBlackBeard");
  expect(faleMpg).toHaveBeenCalledWith("Howdy CaptainBlackBeard!");
});
