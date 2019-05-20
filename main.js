var greetingDiv = document.getElementById("greeting");
// console.log(greetingDiv);

//by class name
//(Note: methods which say getElements... (instead of getElement...) return an array)
var someClassAll = document.getElementsByClassName("some-class");
// console.log(someClassAll);

//by HTML tag name (this returns an array)
var h1 = document.getElementsByTagName("h1");
// console.log(h1);

//by css query selector syntax
var itemWithSpecificClass = document.querySelector("li.my-specific-class");
var itemWithSpecificId = document.querySelector("li#my-specific-id");
// console.log(itemWithSpecificClass);
// console.log(itemWithSpecificId);

//selecting more than 1 element (this returns an array of all html elements meeting the criteria)
var allItems = document.querySelectorAll("li");
var allItemWithClass = document.querySelectorAll("li.my-specific-class");
// console.log(allItems);
// console.log(allItemWithClass);

// greeting_div.addEventListener("click", function() {
//   greeting_div.textContent = "Howdy world!";
// });
