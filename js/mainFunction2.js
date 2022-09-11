// "use strict"; //! STRICT MODE ENABLED

import { checkBtnFunction, editBtnFunction } from "./events.js";

const addTask = document.getElementById("add-task");
const inputTask = document.getElementById("input-task");
const taskContainer = document.getElementById("tasks-container");

//! CREATE TASK MAIN FUNCTION
addTask.addEventListener("click", () => {
	//* Creating Task Container | Getting User Input Value
	let newTask = document.createElement("div");
	newTask.classList.add("task");

	let taskValContainer = document.createElement("div");
	taskValContainer.classList.add("content");

	let taskValue = document.createElement("input");
	taskValue.classList.add("text");
	taskValue.type = "text";
	taskValue.value = inputTask.value;
	taskValue.setAttribute("readonly", "readonly");

	taskValContainer.appendChild(taskValue);
	newTask.appendChild(taskValContainer);

	//* Creating and Appending Edit Button to Task
	let editTaskButton = document.createElement("button");
	editTaskButton.classList.add("edit");
	editTaskButton.innerText = "EDIT";
	newTask.appendChild(editTaskButton);

	//* Creating and Appending Check Button to Task
	let checkButton = document.createElement("i");
	checkButton.classList.add("material-icons", "check-btn");
	checkButton.innerText = "check";
	newTask.appendChild(checkButton);

	//* Creating and Appending Delete Button to Task
	let deleteButton = document.createElement("i");
	deleteButton.classList.add("material-icons", "delete-btn");
	deleteButton.innerText = "delete";
	newTask.appendChild(deleteButton);

	//! Edit Button Event Handler
	editTaskButton.addEventListener("click", editBtnFunction);

	//! Check Button Event Handler
	checkButton.addEventListener("click", checkBtnFunction);

	//! Remove Button Event Handler
	deleteButton.addEventListener("click", (e) => {
		let target = e.target;
		target.parentElement.remove();
	});

	//* Task Input Validation (empty field)
	let openAlert = document.getElementById("alertBox-container");
	let closeAlert = document.getElementById("alertClose-btn");
	if (inputTask.value === "") {
		openAlert.style.display = "block";
		closeAlert.addEventListener("click", () => {
			openAlert.style.display = "none";
		});
	} else {
		inputTask.value = "";
		console.log("new task added");
		return taskContainer.prepend(newTask);
	}
});

//! Enter Event Handler
inputTask.addEventListener("keyup", (e) => {
	e.preventDefault();
	if (e.keyCode === 13) addTask.click();
});

$(document).ready(function () {
	$("add-task").click(function () {
		let newTask = $("<div></div>").addClass("task");
		let taskValContainer = $("<div></div>").addClass("content");

		let taskValue = $('<input type="text">')
			.addClass("text")
			.val($("input-task"))
			.attr("readonly", "readonly");

		taskValue.$("tasks-container").prepend(newTask);
	});
});
