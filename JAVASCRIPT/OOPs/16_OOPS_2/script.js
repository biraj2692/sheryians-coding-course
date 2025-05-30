// ProtoType:


// class Icecream{
//     constructor(nam, flavour){
//         this.name = nam;
//         this.flavour = flavour;
//     }
// }

// Icecream.prototype.price = 30;
// Icecream.prototype.sayHello = function () {
//     console.log("Hello there I am Icecream");
// }
// let icecream1 = new Icecream("Milk Vanilla","Vanilla");


// function Toffee(name,price) {
//     this.name = "#" + name;
//     this.price = "#" + price;
//     this.printMyName = ()=>{
//         console.log(this.name);
//     }
//     this.printMyPrice = ()=>{
//         console.log(this.price);
//     }
// }

// function Employee(name, age, id, salary){
//     this.name = name;
//     this.age = age;
//     this.id = id;
//     this.salary = salary;
// }

Employee.prototype.printDetails =  ()=>{
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old. My ID is ${this.id} and my salary is ${this.salary}`);
}

let u1 = new Employee("Biraj",21,1,20000);