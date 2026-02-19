function Person(name, age) {
this.name = name;
this.age = age;
this.human = true;
this.canDrive = age >= 18;
}
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);
console.log(person1);
console.log(person2);
PersonClass = class {
constructor(name, age) {
this.name = name;
this.age = age;
this.human = true;
this.canDrive = age >= 18;
}
}
const person3 = new PersonClass('Charlie', 35);
console.log(person3);
PersonClass.prototype.isAdult = function() {
return this.age >= 18;
}