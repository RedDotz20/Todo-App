// import { currentDate, currentTime } from "../components/dateAndTime.js";
const todoInputItem = document.getElementById("todoInput");
const todoAddButton = document.getElementById("todoaddbutton");
const todoList = document.getElementById("todos");

const newList = document.createElement("li");
const newButton = document.createElement("button");

function addTodoItems(button, list, itemAdd) {
	button.addEventListener("click", function () {
		let newNodeElement = document.createElement("li");
		let newTextNode = document.createTextNode(itemAdd.value);
		newNodeElement.appendChild(newTextNode);
		list.appendChild(newNodeElement);
	});
}

function removeTodoItems(button, list, itemRemove) {}

// Add New Items
addTodoItems(todoAddButton, todoList, todoInputItem);
