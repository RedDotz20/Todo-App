// import { currentDate, currentTime } from "/src/js/dateAndTime";

const addTask = document.querySelector("#add-task");
const inputTask = document.querySelector("#input-task");
const taskContainer = document.querySelector("#tasks-container");

addTask.addEventListener("click", taskFunction);

function taskFunction() {
	let task = document.createElement("div");
	task.classList.add("task");

	let li = document.createElement("li");
	li.innerText = `${inputTask.value}`;
	task.appendChild(li);

	let checkButton = document.createElement("button");
	checkButton.innerHTML = "CHECKED";
	checkButton.classList.add("checkTask");
	task.appendChild(checkButton);

	let deleteButton = document.createElement("button");
	deleteButton.innerHTML = "DELETE";
	deleteButton.classList.add("deleteTask");
	task.appendChild(deleteButton);

	// ---------------------
	// let time = currentTime;
	// let date = currentDate;
	// let dateTime = document.createElement("p");
	// dateTime.innerHTML = time;
	// task.appendChild(dateTime);
	// ---------------------

	inputTask.value === ""
		? alert("Please Enter a Task")
		: taskContainer.appendChild(task);

	inputTask.value = "";

	checkButton.addEventListener("click", () => {
		checkButton.parentElement.style.textDecoration = "line-through";
	});

	deleteButton.addEventListener("click", (e) => {
		let target = e.target;
		target.parentElement.remove();
	});
}
