import Employee from "./employee.js";
// import managerInfo from "./Prompts/managerPrompt";

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

async function createManager(manager) {
  return `
<div class="card employee-card">
<div class="card-header bg-primary text-white">
    <h2 class="card-title">${manager.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
    </ul>
</div>
</div>
    `;
}

export { Manager, createManager };

const manager = new Manager("John Smith", 123, "john.smith@example.com", 1001);

console.log(manager);
