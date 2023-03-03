import Employee from "./employee";

class Engineer extends Employee {
  constructor(name, id, email, github) {
    this.github = github;

    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getGithub() {}

  getRole() {
    return "Engineer";
  }
}

export default Engineer;
