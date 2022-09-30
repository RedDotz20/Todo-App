import { editBtnFunction, validateCheckBox } from "./taskEvent.js";

const taskContainer = document.getElementById("tasks-container");
export const inputTask = document.getElementById("input-task");

export function createTaskFunction() {
	//* Creating Task Container | Getting User Input Value
	let newTask = document.createElement("div");
	newTask.classList.add("task");

	let taskValContainer = document.createElement("div");
	taskValContainer.classList.add("content");

	//* New Check button
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	// checkbox.name = "name";
	// checkbox.value = "value";
	checkbox.id = "checkboxId";
	newTask.appendChild(checkbox);

	checkbox.addEventListener("click", validateCheckBox);

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

	//! Edit Button Event Handler
	editTaskButton.addEventListener("click", editBtnFunction);

	//* Creating and Appending Delete Button to Task
	let deleteButton = document.createElement("i");
	deleteButton.classList.add("material-icons", "delete-btn");
	deleteButton.innerText = "delete";
	newTask.appendChild(deleteButton);

	//! Delete Button Event Handler
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
}
