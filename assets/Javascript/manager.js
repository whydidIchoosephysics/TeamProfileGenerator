import Employee from "./employee";

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    this.officeNumber = officeNumber;

    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getRole() {
    return "Manager";
  }
}

export default Manager;
