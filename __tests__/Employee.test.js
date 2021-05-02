const Employee = require("../lib/Employee.js");

test("Create employee object", () => {
  const employee = new Employee(name, id, email);

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any());
});
