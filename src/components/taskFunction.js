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

	let taskValContainer = document.createElement("div");
	taskValContainer.classList.add("content");

	let taskValue = document.createElement("input");
	// taskValue.innerText = `${inputTask.value}`;

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
	editTaskButton.addEventListener("click", (e) => {
		let checkDone = e.target.nextElementSibling;
		if (editTaskButton.innerText == "EDIT") {
			if (!checkDone.classList.contains("taskChecked")) {
				editTaskButton.innerText = "SAVE";
				taskValue.removeAttribute("readonly");
				taskValue.focus();
			}
		} else {
			editTaskButton.innerText = "EDIT";
			taskValue.setAttribute("readonly", "readonly");
		}
	});

	//! Check Button Event Handler
	checkButton.addEventListener("click", (e) => {
		let checkTarget =
			e.target.previousElementSibling.previousElementSibling.firstChild;
		if (checkButton.classList.contains("taskChecked")) {
			checkButton.classList.remove("taskChecked");
			checkTarget.style.color = null;
			checkTarget.style.textDecoration = null;
			checkTarget.style.transition = "200ms";
		} else {
			checkButton.classList.add("taskChecked");
			checkTarget.style.color = "rgb(0, 255, 0)";
			checkTarget.style.textDecoration = "line-through";
			checkTarget.style.transition = "350ms";
		}
	});

	//! Remove Button Event Handler
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

//* Appending Date and Time Variables to Task
// let dateContainer = document.createElement("div");
// let dateTime = document.createElement("span");
// dateContainer.classList.add("dateAndTime");
// dateTime.textContent = `${currentTime} - ${currentDate}`;
// dateContainer.appendChild(dateTime);
// newTaskBtn.appendChild(dateContainer);
