const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, schoolName) {
    // calls parents constructor method and set parents properties
    super(name, id, email);

    // Engineers 'special' variable that other classes dont need
    this.schoolName = schoolName;
  }

  // Override role name
  getRole() {
    return "Intern";
  }

  // Special info
  getSchool() {
    return this.schoolName;
  }
}

module.exports = Intern;
