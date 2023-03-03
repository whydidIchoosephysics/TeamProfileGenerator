import Employee from "./employee";

class Intern extends Employee {
  constructor(name, id, email, school) {
    this.school = school;

    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getSchool() {}

  getRole() {
    return "Intern";
  }
}

export default Intern;
