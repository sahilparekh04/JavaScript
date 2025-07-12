class Person {
  constructor(name) {
    this.name = name;
    // console.log("Hello");
  }
  sayHello() {
    console.log("Hello");
  }
}
let p1 = new Person();
p1.name = "Yash";
console.log(p1.name);

class User extends Person {
  sayBye() {
    console.log("Bye");
  }
}
let u1 = new User();
u1.sayHello();
u1.sayBye();
