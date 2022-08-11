import dateAndTime, { currentDate, currentTime } from "./dateAndTime.js";

const addTask = document.getElementById("add-task");
const inputTask = document.getElementById("input-task");
const taskContainer = document.getElementById("tasks-container");

inputTask.addEventListener("keyup", (e) => {
	e.preventDefault();
	if (e.keyCode === 13) addTask.click();
});

addTask.addEventListener("click", (e) => {
	let task = document.createElement("div");
	task.classList.add("task");

	let li = document.createElement("li");
	li.innerText = `${inputTask.value}`;
	task.appendChild(li);

	let checkButton = document.createElement("button");
	checkButton.innerHTML = "CHECKED";
	checkButton.classList.add("task-button");
	task.appendChild(checkButton);

	let deleteButton = document.createElement("button");
	deleteButton.innerHTML = "DELETE";
	deleteButton.classList.add("task-button");
	task.appendChild(deleteButton);

	let time = currentTime;
	let date = currentDate;
	let dateContainer = document.createElement("div");
	dateContainer.classList.add("dateAndTime");

	let dateTime = document.createElement("span");
	dateTime.textContent = `Date Added ${date} ${time}`;
	dateContainer.appendChild(dateTime);
	task.appendChild(dateContainer);

	inputTask.value === ""
		? alert("Please Enter a Task")
		: taskContainer.appendChild(task);

	inputTask.value = "";

	checkButton.addEventListener("click", () => {
		checkButton.previousElementSibling.style.textDecoration =
			"line-through";
	});

	deleteButton.addEventListener("click", (e) => {
		let target = e.target;
		target.parentElement.remove();
	});
});
