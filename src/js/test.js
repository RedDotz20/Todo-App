import dateAndTime, { currentDate, currentTime } from "./dateAndTime.js";

//! Button Event Listener
$("#addTask").click(function addTask(e) {
	$("<div></div>").addClass("task");

	$("<li></li>").text(`${$("#input-task").val()}`);
});

//! ----------------------------------------------------------------

// import dateAndTime, { currentDate, currentTime } from "./dateAndTime.js";

// const addTask = document.getElementById("add-task");
// const inputTask = document.getElementById("input-task");
// const taskContainer = document.getElementById("tasks-container");

// //! Enter Key Event
// inputTask.addEventListener("keyup", (e) => {
// 	e.preventDefault();
// 	if (e.keyCode === 13) addTask.click();
// });

// //! Button Event
// addTask.addEventListener("click", (e) => {
// 	//* Creating "task" Container

// 	let task = document.createElement("div");
// 	task.classList.add("task");

// 	let li = document.createElement("li");
// 	li.innerText = `${inputTask.value}`;
// 	task.appendChild(li);

// 	//* Appending Check Button to Task

// 	let checkButton = document.createElement("button");
// 	checkButton.classList.add("check-btn", "task-button");
// 	checkButton.innerHTML = "CHECKED";
// 	task.appendChild(checkButton);

// 	// TODO: SVG ICON append to checkButton
// 	// let chkImg = document.createElement("img");
// 	// chkImg.setAttribute("src", "/img/check-solid.svg");
// 	// checkButton.appendChild(chkImg);

// 	//* Appending Delete Button to Task

// 	let deleteButton = document.createElement("button");
// 	deleteButton.classList.add("delete-btn", "task-button");
// 	deleteButton.innerHTML = "DELETE";
// 	task.appendChild(deleteButton);

// 	// TODO: SVG ICON append to deleteButton
// 	// let delImg = document.createElement("img");
// 	// delImg.setAttribute("src", "/img/trash-solid.svg");
// 	// deleteButton.appendChild(delImg);

// 	//* Appending Date and Time Variables to Task

// 	let dateContainer = document.createElement("div");
// 	let dateTime = document.createElement("span");
// 	dateContainer.classList.add("dateAndTime");
// 	dateTime.textContent = `${currentTime} - ${currentDate}`;
// 	dateContainer.appendChild(dateTime);
// 	task.appendChild(dateContainer);

// 	//* Task Input Validation (empty string)

// 	inputTask.value === ""
// 		? alert("Please Enter a Task")
// 		: taskContainer.appendChild(task);
// 	inputTask.value = ""; // delete input value

// 	//! Check Button Event
// 	checkButton.addEventListener("click", () => {
// 		checkButton.previousElementSibling.style.textDecoration =
// 			"line-through";
// 	});

// 	//! Remove Button Event
// 	deleteButton.addEventListener("click", (e) => {
// 		let target = e.target;
// 		target.parentElement.remove();
// 	});
// });
