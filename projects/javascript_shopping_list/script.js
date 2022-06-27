var input = document.getElementById("input");
var button = document.getElementById("enter");
var grid = document.getElementById("grid");
var items = document.getElementsByClassName("item");

button.addEventListener("click", createItem);
input.addEventListener("keypress", checkInput);

function done_stuff() {
	this.classList.add("done");
	this.removeEventListener("click", done_stuff);
	this.addEventListener("click", undo_stuff);
}

function undo_stuff() {
	this.classList.remove("done");
	this.removeEventListener("click", undo_stuff);
	this.addEventListener("click", done_stuff);
}

function remove_stuff(item) {
	this.parentNode.remove();
}

function createItem() {
	if (input.value === "") {
		return;
	}
	var item = document.createElement("div");
	var h3 = document.createElement("h3");
	var remove = document.createElement("img");
	h3.appendChild(document.createTextNode(input.value));
	remove.src = "../../icons/small-x-symbolic.svg";
	remove.addEventListener("click", remove_stuff);
	item.appendChild(remove);
	item.appendChild(h3);
	item.className = "item";
	item.addEventListener("click", done_stuff);
	grid.appendChild(item);
	input.value = "";
}

// To Check For Empty Spaces at the Start

function validate(input){
  if(/^\s/.test(input.value))
    input.value = '';
}

function checkInput() {
	if (event.keyCode === 13) {
		createItem();
	}
}
