const Manager = require("../lib/Manager");

test("Create Manager object and test functions", () => {
  const manager = new Manager("name", 3, "email", 301);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));

  // Check functions
  expect(manager.getEmail()).toEqual("email");
  expect(manager.getOfficeNumber()).toEqual(301);
  expect(manager.getId()).toEqual(3);
  expect(manager.getName()).toEqual("name");
  expect(manager.getRole()).toEqual("Manager");
});
