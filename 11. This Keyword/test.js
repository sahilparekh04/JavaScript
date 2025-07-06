// // for normal function this value is calling object
// const student = {
//   name: "Sahil",
//   getName() {
//     console.log(this.name);
//   },
// };

// student.getName();

// // This for arrow function is laxical scope means it refer to parent who call studen2 object in that case window object.
// const student2 = {
//   name: "Sahil Parekh",
//   getNameStudent2: () => {
//     console.log(this.name); // undefined bcz it refer to window object
//   },
// };
// student2.getNameStudent2();

// When to use arrow function
let person = {
  name: "Sahil",
  getName: function () {
    setTimeout(function () {
      console.log(this.name); //undefind bcz this function  this refers to setTimeout which is window object property.
    }, 2000);
  },
  getName2: function () {
    setTimeout(() => {
      console.log(this.name);// run bcz this function refers to its parent which is person obj.
    }, 2000);
  },
};
person.getName();
person.getName2();
