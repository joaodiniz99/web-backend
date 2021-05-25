// B)
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(
    `Hello ${
      this.firstName + " " + this.lastName + " " + this.age + " " + this.gender
    }`
  );
};

Person.prototype.gender = "N/A";

var p1 = new Person("João", "Diniz", 21);
var p2 = new Person("David", "Jardim", 23);

p1.gender = "M";
p2.gender = "F";

p1.greet();
p2.greet();

console.log(p1.__proto__);
console.log(p2.__proto__);
console.log(p1.__proto__ == p2.__proto__);
