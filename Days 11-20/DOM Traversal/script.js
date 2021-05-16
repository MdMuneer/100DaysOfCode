// const grandparent = document.getElementById("grandparent-id"); //different way
const grandparent = document.querySelector("#grandparent-id")

changeColor(grandparent)

function changeColor(element){
	element.style.changeColor = "green"
}


