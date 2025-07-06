// Selecting elements by id
let bodys = document.querySelector("body");
let paraById = document.getElementById("first-para");

// Navigation
// return parent element
paraById.parentElement;
console.dir(paraById.parentElement);

// return prev sibling element
paraById.previousElementSibling;
console.dir(paraById.previousElementSibling);

// return prev sibling element
paraById.nextElementSiblingElementSibling;
console.dir(paraById.nextElementSibling);

// return child
bodys.children;
console.dir(bodys.children);
