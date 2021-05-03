const Intern = require("../lib/Intern");

test("Create Intern object and test functions", () => {
  const intern = new Intern("name", 3, "email", "school");

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.schoolName).toEqual(expect.any(String));

  // Check functions
  expect(intern.getEmail()).toEqual("email");
  expect(intern.getSchool()).toEqual("school");
  expect(intern.getId()).toEqual(3);
  expect(intern.getName()).toEqual("name");
  expect(intern.getRole()).toEqual("Intern");
});
