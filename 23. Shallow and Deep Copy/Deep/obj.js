// Deep Copy of array/object and nested array and object has their own address
// Object Deep copy method using structuredClone and Json but using json function,date can not be handle and undefined ignored
let objStudent = {
  name: "Sahil",
  address: {
    city: "Ahemdabad",
    pincode: 382418,
  },
};

let copyobj = JSON.parse(JSON.stringify(objStudent));
copyobj.address.city = "Anjar";
console.log(copyobj);
console.log(objStudent);

let copyobj2 = structuredClone(objStudent);
copyobj2.address.pincode = 302519;
console.log(copyobj2);
console.log(objStudent);
