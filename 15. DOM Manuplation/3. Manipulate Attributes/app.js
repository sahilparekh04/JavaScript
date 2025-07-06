// Selecting elements by id
let headingById = document.getElementById("first-heading");
let paraById = document.getElementById("first-para");

// Getting Attribute of elements
// obj.getAttribute(attributeName);

console.dir(headingById.getAttribute("id"));

// Set Attribute of elements
headingById.setAttribute("class", "testing");
