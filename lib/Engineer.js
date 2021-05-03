const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, git_Username) {
    // calls parents constructor method and set parents properties
    super(name, id, email);

    // Engineers 'special' variable that other classes dont need
    this.git_Username = git_Username;
  }

  // Override role name
  getRole() {
    return "Engineer";
  }

  // Special info
  getGitUsername() {
    return this.git_Username;
  }
}

module.exports = Engineer;
