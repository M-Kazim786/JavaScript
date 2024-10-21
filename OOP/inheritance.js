class Employee {
    constructor(name,salary) {
       this.name=name;
       this.salary=salary;
    }
    displayInfo() {
        console.log(`Hello, my name is ${this.name} and my salary is Rs ${this.salary}`);
    }
}
class Manager extends Employee {
    constructor(name,salary,department) {
        super(name,salary);
        this.department=department;
    }
    //Override
    displayInfo() {
        console.log(`Hello, my name is ${this.name}. Im in the ${this.department} department and my salary is Rs${this.salary}`);
    }
}
let emp1=new Manager("Muhammad Kazim",540000.99,"Development");
emp1.displayInfo();