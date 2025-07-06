// use to access deeply nested property value by ?. and we can not do in left side only for right side.
let obj = {};
// Printing that property that not defined using normal
// console.log(obj.address.pincode); // genrate error
console.log(obj.address?.pincode); // genrate undefined

// Use for safety
let obj2 = {
  address: {
    city: "Ahemdabad",
  },
};
console.log(obj2.address.pincode?.ahemdabad);

let arr = [1, 2, 3, 4, 5];
console.log(arr[0]?.[1]);
// Optional + Nullish
console.log(arr[0]?.[1] ?? "Not Specifed");
