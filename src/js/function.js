// import { currentDate, currentTime } from "../components/dateAndTime.js";

const addTask = document.querySelector("#add-task");
const inputTask = document.querySelector("#input-task");
const taskContainer = document.querySelector("#tasks-container");

addTask.addEventListener("click", function () {
	// creating a div element
	let task = document.createElement("div");
	task.classList.add("task");

	// creating list item with value
	let li = document.createElement("li");
	li.innerText = `${inputTask.value}`;
	task.appendChild(li);

	let checkButton = document.createElement("button");
	checkButton.innerHTML = "check";
	checkButton.classList.add("checkTask");
	task.appendChild(checkButton);

	let deleteButton = document.createElement("button");
	deleteButton.innerHTML = "delete";
	deleteButton.classList.add("deleteTask");
	task.appendChild(deleteButton);

	inputTask.value === ""
		? alert("please enter a task")
		: taskContainer.appendChild(task);

	inputTask.value = "";

	// CHECKED BUTTON EVENT
	checkButton.addEventListener("click", function () {
		checkButton.parentElement.style.textDecoration = "line-through";
	});

	// DELETE BUTTON EVENT
	deleteButton.addEventListener("click", function (e) {
		let target = e.target;
		target.parentElement.parentElement.remove();
	});
});
