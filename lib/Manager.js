const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // calls parents constructor method and set parents properties
    super(name, id, email);

    // Engineers 'special' variable that other classes dont need
    this.officeNumber = officeNumber;
  }

  // Override role name
  getRole() {
    return "Manager";
  }

  // Special info
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
