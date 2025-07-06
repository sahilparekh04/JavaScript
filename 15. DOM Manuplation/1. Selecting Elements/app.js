// Selecting elements by id
let headingById = document.getElementById("first-heading");

// Selecting elements by className
let paraByClass = document.getElementsByClassName("paras");

// Selecting elements by tagName it returns HTMLCollection
let paraByTag = document.getElementsByTagName("p");

// Selecting elements by querySelector like we are selecting in css files it can be by #id, tagname, .className or h1 > a or ::nth-child(2)
let headingByQuery = document.querySelector("h1");

// Selecting collection of elements by querySelectorAll
let paraCollection = document.querySelectorAll("p");
