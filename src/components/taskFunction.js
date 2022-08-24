import { currentDate, currentTime } from "./dateAndTime.js";
import { addTask, inputTask, taskContainer } from "/src/script.js";

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
	checkButton.innerHTML = "CHECKED";
	newTaskBtn.appendChild(checkButton);

	// TODO: SVG ICON append to checkButton
	// let chkImg = document.createElement("img");
	// chkImg.setAttribute("src", "/img/check-solid.svg");
	// checkButton.appendChild(chkImg);

	//* Creating and Appending Delete Button to Task
	let deleteButton = document.createElement("button");
	deleteButton.classList.add("delete-btn");
	deleteButton.innerHTML = "DELETE";
	newTaskBtn.appendChild(deleteButton);

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
	newTaskBtn.appendChild(dateContainer);

	//* Appending Task Button Container to Task
	newTask.appendChild(newTaskBtn);

	//! Check Button Event
	checkButton.addEventListener("click", () => {
		let doneTask = checkButton.parentElement.previousElementSibling;
		doneTask.style.textDecoration = "line-through";
	});

	//! Remove Button Event
	deleteButton.addEventListener("click", (element) => {
		let target = element.target;
		target.parentElement.parentElement.remove();
	});

	//* Task Input Validation (empty field)
	if (inputTask.value === "") return alert("Please Enter a Task");
	inputTask.value = "";
	return taskContainer.appendChild(newTask);
}
