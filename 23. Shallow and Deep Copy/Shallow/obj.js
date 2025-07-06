// Shallow Copy of array/object means nested array and object has refrence error
// Object shallow copy method using Object.assign({},obj) and spred oprator
let objStudent = {
  name: "Sahil",
  address: {
    city: "Ahemdabad",
    pincode: 382418,
  },
};

let copyobj = { ...objStudent };
copyobj.address.city = "Anjar";
console.log(objStudent);

let copyobj2 = Object.assign({}, objStudent);
console.log(copyobj2);
copyobj2.address.pincode = 302519;
console.log(objStudent);
