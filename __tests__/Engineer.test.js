const Engineer = require("../lib/Engineer");

test("Create Engineer object and", () => {
  const engineer = new Engineer("name", 3, "email", "git_user");

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.git_Username).toEqual(expect.any(String));

  // Check functions
  expect(engineer.getEmail()).toEqual("email");
  expect(engineer.getGitUsername()).toEqual("git_user");
  expect(engineer.getId()).toEqual(3);
  expect(engineer.getName()).toEqual("name");
  expect(engineer.getRole()).toEqual("Engineer");
});
