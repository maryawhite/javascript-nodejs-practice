//create an Object called employee that has the properties of first name, last name, employee ID number, and department name.
//console.log each of the properties

let employee = {
    firstName: "Mary",
    lastName: "White",
    employeeIDNum: 0565308,
    departmentName: "Information Technology"
}

// console.log(employee.firstName);
// console.log(employee.lastName);
// console.log(employee.employeeIDNum);
// console.log(employee.departmentName);
// console.log("----------------------");

//same information using the "for in" loop
for (let x in employee) {
    console.log(employee[x]);
}
console.log("-----------------------");

//Now, create an employee object using a constructor and then instantiate it.
function Employee(first, last, idNum, dept) {
    this.first = first;
    this.last = last; 
    this.idNum = idNum;
    this.dept = dept;
}

let brandy = new Employee("Brandy", "Jones", 0574497, "Accounting");
console.log(brandy.first + " " + brandy.last + " " + brandy.idNum + " " + brandy.dept);
console.log("----------------");
for(let x in brandy) {
    console.log(brandy[x]);
}

console.log("----------------");

// Write a function that takes in an object(a) and a string(b) and return true if a has a property with key b
function myFunction(a, b) {

    return a.hasOwnProperty(b);
}

console.log(myFunction({a:1, b:2, c:3}, 'b'));  //true
console.log(myFunction({a:1, b:2, c:3}, 'f'));  //false



