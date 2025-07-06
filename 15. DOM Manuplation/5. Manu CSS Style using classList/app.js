// Selecting elements by id
let headingById = document.getElementById("first-heading");
let paraById = document.getElementById("first-para");

// We can manipulate using classList and only work with class
/*
    add()
    remove()
    contains() check if exist
    toggle() if added then remove if not then add
*/

headingById.classList.add("test-heading");
paraById.classList.remove("first-para");
