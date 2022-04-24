class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    getName() {
        console.log(`This is ${this.name}`);
    }
    getId() {
        console.log(`My ID is ${this.id}`);
    }
    getEmail() {
        console.log(`My email address is ${this.email}`);
    }
    getRole() {
        console.log(`My role is ${this.role}`);
    }
}

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
        this.role = "Manager";
    }
    getofficeNum() {
        console.log(`My office num is ${this.officeNum}`);
    }
    getRole() {
        console.log(`My role is ${this.role}`)
    }
}

class Engineer extends Employee {
    constructor(name, id, email, ghUsername) {
        super(name, id, email);
        this.ghUsername = ghUsername;
        this.role = "Engineer";
    }
    getGithub() {
        console.log(`My github username is ${this.ghUsername}`);
    }
    getRole() {
        console.log(`My role is ${this.role}`);
    }
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern"
    }
    getSchool() {
        console.log(`My school is ${this.school}`);
    }
    getRole() {
        console.log(`My role is ${this.role}`);
    }
}


const razuba = new Manager("Abuzar", 99, "johndoe@ok.com", 24);

razuba.getName();
razuba.getId();
razuba.getEmail();
razuba.getofficeNum();
razuba.getRole();