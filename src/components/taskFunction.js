import { currentDate, currentTime } from "./dateAndTime.js";
import {
	openAlert,
	closeAlert,
	addTask,
	inputTask,
	taskContainer,
} from "/src/script.js";

export function enterKeyFunction(e) {
	e.preventDefault();
	if (e.keyCode === 13) addTask.click();
}

export function createTaskFunction() {
	//* Creating Task Container | Getting Input Value
	let newTask = document.createElement("div");
	let taskValue = document.createElement("li");
	newTask.classList.add("task");
	taskValue.classList.add("content");
	taskValue.innerText = `${inputTask.value}`;
	newTask.appendChild(taskValue);

	//* Creating Task Button Container
	let newTaskBtn = document.createElement("div");
	newTaskBtn.classList.add("taskbtn-Container");

	//* Creating and Appending Check Button to Task
	let checkButton = document.createElement("button");
	checkButton.classList.add("check-btn");
	checkButton.innerHTML = '<i class="material-icons">check</i>';
	newTaskBtn.appendChild(checkButton);

	//* Creating and Appending Delete Button to Task
	let deleteButton = document.createElement("button");
	deleteButton.classList.add("delete-btn");
	deleteButton.innerHTML = '<i class="material-icons">delete</i>';
	newTaskBtn.appendChild(deleteButton);

	//* Appending Date and Time Variables to Task
	let dateContainer = document.createElement("div");
	let dateTime = document.createElement("span");
	dateContainer.classList.add("dateAndTime");
	dateTime.textContent = `${currentTime} - ${currentDate}`;
	dateContainer.appendChild(dateTime);
	newTaskBtn.appendChild(dateContainer);

	//* Appending Task Button Container to Task
	newTask.appendChild(newTaskBtn);

	//! Check Button Event
	checkButton.addEventListener("click", () => {
		let doneTask = checkButton.parentElement.previousElementSibling;
		doneTask.style.textDecoration = "line-through";
		doneTask.style.color = "rgb(0, 255, 0)";
	});

	//! Remove Button Event
	deleteButton.addEventListener("click", (e) => {
		let target = e.target;
		target.parentElement.parentElement.parentElement.remove();
	});

	//* Task Input Validation (empty field)
	if (inputTask.value === "") {
		openAlert.style.display = "block";
		closeAlert.addEventListener("click", () => {
			openAlert.style.display = "none";
		});
	} else {
		inputTask.value = "";
		return taskContainer.prepend(newTask);
	}
}
