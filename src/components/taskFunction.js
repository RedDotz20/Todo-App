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
	newTask.classList.add("task");
	let taskValContainer = document.createElement("ul");
	let taskValue = document.createElement("li");
	taskValue.innerText = `${inputTask.value}`;
	taskValContainer.appendChild(taskValue);
	newTask.appendChild(taskValContainer);

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

	//* Appending Date and Time Variables to Task
	// let dateContainer = document.createElement("div");
	// let dateTime = document.createElement("span");
	// dateContainer.classList.add("dateAndTime");
	// dateTime.textContent = `${currentTime} - ${currentDate}`;
	// dateContainer.appendChild(dateTime);
	// newTaskBtn.appendChild(dateContainer);

	//! Check Button Event
	checkButton.addEventListener("click", (e) => {
		let checkTarget = e.target.previousElementSibling.firstChild;
		checkTarget.style.textDecoration = "line-through";
		checkTarget.style.color = "rgb(0, 255, 0)";
	});

	//! Remove Button Event
	deleteButton.addEventListener("click", (e) => {
		let target = e.target;
		target.parentElement.remove();
	});

	//* Task Input Validation (empty field)
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
}
