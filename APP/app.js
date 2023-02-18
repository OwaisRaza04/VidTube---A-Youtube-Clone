// ---------------Adding Click Event on Menu Icon-----------------------
var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var menuIcon = document.querySelector(".menu-icon");
var newMenu = document.querySelector(".new-menu");
var elements = document.querySelectorAll("figcaption");


var elementStates = {};
elements.forEach(function(element, index) {
  elementStates[index] = false;
});



menuIcon.onclick  = function(){
    
    sideBar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");

    elements.forEach(function(element, index) {
      elementStates[index] = !elementStates[index];
      if (elementStates[index]) {
        element.style.width = "320px";
      } else {
        element.style.width = "280px";
      }
    });





};

