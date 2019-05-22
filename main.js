let greetingDiv = document.getElementById("greeting");

//by class name
//(Note: methods which say getElements... (instead of getElement...) return an array)
let someClassAll = document.getElementsByClassName("some-class");

//by HTML tag name (this returns an array)
let h1 = document.getElementsByTagName("h1");

//by css query selector syntax
let itemWithSpecificClass = document.querySelector("li.my-specific-class");
let itemWithSpecificId = document.querySelector("li#my-specific-id");

//selecting more than 1 element (this returns an array of all html elements meeting the criteria)
let allItems = document.querySelectorAll("li");
let allItemWithClass = document.querySelectorAll("li.my-specific-class");
