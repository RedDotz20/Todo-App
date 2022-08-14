import dateAndTime, { currentDate, currentTime } from "./dateAndTime.js";

//! EVENT LISTENERS

$("#add-task").click(addTask); //? CLICK EVENT

$("#input-task").on("keyup", (event) => {
	//? ENTER KEY EVENT
	if (event.which == 13) {
		event.preventDefault();
		$("#add-task").click();
	}
});

//! Add Task Function
function addTask() {
	let task = $("<div></div>").addClass("task");

	//* Appending Input Item to Task
	task.append($("<li></li>").text($("#input-task").val()));

	//* Appending Check Button to Task
	task.append(
		$("<button></button>")
			.addClass("check-btn", "task-button")
			.html("CHECKED")
	);

	//* Appending Delete Button to Task
	task.append(
		$("<button></button>")
			.addClass("delete-btn", "task-button")
			.html("DELETE")
	);

	//* Appending Date and Time Variables to Task
	task.append(
		$("<div></div>")
			.addClass("dateAndTime")
			.append($("<span></span>").text(`${currentTime} - ${currentDate}`))
	);

	//! Tasks Event Listeners

	//* Checked Button Event
	$(".check-btn").click(function () {
		console.log(
			$(this).siblings().first().css("background-color", "yellow")
		);
	});

	//* Remove Button Event
	// $(".delete-btn").on("click", function (event) {
	// 	event.preventDefault();
	// 	event.parent().remove();
	// });

	//? Task Input Validation (Empty Field)
	return $("#input-task").val() === ""
		? alert("Please Enter a Task")
		: $("#tasks-container").append(task);
}

// $(document).ready(function () {
// });

// console.log($(".container").prev());
