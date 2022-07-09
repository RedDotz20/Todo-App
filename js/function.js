// import { currentDate, currentTime } from "../components/dateAndTime.js";

const todoInputItem = document.getElementById("todoInput");
const todoAddButton = document.getElementById("todoaddbutton");
const todoList = document.getElementById("todos");

function addTodoItems(button, list, itemAdd) {
	button.addEventListener("click", function () {
		let newNodeElement = document.createElement("li");
		let newTextNode = document.createTextNode(itemAdd.value);
		newNodeElement.appendChild(newTextNode);
		list.appendChild(newNodeElement);
	});
}

addTodoItems(todoAddButton, todoList, todoInputItem);
