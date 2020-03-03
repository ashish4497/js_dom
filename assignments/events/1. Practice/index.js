//Select the section with an id of container without using querySelector.
document.getElementById("container");

//Select the section with an id of container using querySelector.
document.querySelector("#container");

//Select all of the list items with a class of "second".
document.querySelectorAll(".second");


//Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol").querySelector(".third")



//Give the section with an id of container the text "Hello!".
var container = document.querySelectorAll("#container");
container.innerText = "hello"


//Add the class main to the div with a class of footer.
document.querySelectorAll(".footer").classList.add("main");


//Remove the class main on the div with a class of footer.
document.querySelectorAll(".main").classList.add("footer");

//Create a new li element.
document.createElement("li");


//Give the li the text "four".
var li = document.querySelectorAll("li").innerText = "four";


//Append the li to the ul element.

ul.append(li);


//Loop over all of the list inside the ol tag and give them a background color of "green".
var ol = document.querySelectorAll("ol");
ol.forEach(element => {
  element.style.background = "green";
});


//Remove the div with a class of footer.
document.querySelectorAll(".footer").remove(div);