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

	// ----------------------------------------

	let checkButton = document.createElement("button");

	// let chkImg = document.createElement("img");
	// chkImg.setAttribute("src", "/img/check-solid.svg");
	// checkButton.appendChild(chkImg);
	checkButton.innerHTML = "CHECKED";

	checkButton.classList.add("check-btn");
	checkButton.classList.add("task-button");
	task.appendChild(checkButton);

	// ----------------------------------------

	let deleteButton = document.createElement("button");

	// let delImg = document.createElement("img");
	// delImg.setAttribute("src", "/img/trash-solid.svg");
	// deleteButton.appendChild(delImg);
	deleteButton.innerHTML = "DELETE";

	deleteButton.classList.add("delete-btn");
	deleteButton.classList.add("task-button");
	task.appendChild(deleteButton);

	// ----------------------------------------

	let time = currentTime;
	let date = currentDate;
	let dateContainer = document.createElement("div");
	dateContainer.classList.add("dateAndTime");

	let dateTime = document.createElement("span");
	dateTime.textContent = `${time} - ${date}`;
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
