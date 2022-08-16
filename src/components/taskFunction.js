import { currentDate, currentTime } from "./dateAndTime.js";
import { addTask, inputTask, taskContainer } from "/src/script.js";

export function enterKeyFunction(e) {
	e.preventDefault();
	if (e.keyCode === 13) addTask.click();
}

export function createTaskFunction() {
	//* Creating "task" Container
	let newTask = document.createElement("div");
	let taskValue = document.createElement("li");
	newTask.classList.add("task");
	taskValue.classList.add("content");
	taskValue.innerText = `${inputTask.value}`;
	newTask.appendChild(taskValue);

	//* Appending Check Button to Task
	let checkButton = document.createElement("button");
	checkButton.classList.add("check-btn", "task-button");
	checkButton.innerHTML = "CHECKED";
	newTask.appendChild(checkButton);

	// TODO: SVG ICON append to checkButton
	// let chkImg = document.createElement("img");
	// chkImg.setAttribute("src", "/img/check-solid.svg");
	// checkButton.appendChild(chkImg);

	//* Appending Delete Button to Task
	let deleteButton = document.createElement("button");
	deleteButton.classList.add("delete-btn", "task-button");
	deleteButton.innerHTML = "DELETE";
	newTask.appendChild(deleteButton);

	// TODO: SVG ICON append to deleteButton
	// let delImg = document.createElement("img");
	// delImg.setAttribute("src", "/img/trash-solid.svg");
	// deleteButton.appendChild(delImg);

	//* Appending Date and Time Variables to Task
	let dateContainer = document.createElement("div");
	let dateTime = document.createElement("span");
	dateContainer.classList.add("dateAndTime");
	dateTime.textContent = `${currentTime} - ${currentDate}`;
	dateContainer.appendChild(dateTime);
	newTask.appendChild(dateContainer);

	//! Check Button Event
	checkButton.addEventListener("click", () => {
		let doneTask = checkButton.previousElementSibling;
		doneTask.style.textDecoration = "line-through";
	});

	//! Remove Button Event
	deleteButton.addEventListener("click", (element) => {
		let target = element.target;
		target.parentElement.remove();
	});

	//* Task Input Validation (empty field)
	if (inputTask.value === "") return alert("Please Enter a Task");
	inputTask.value = "";
	return taskContainer.appendChild(newTask);
}
