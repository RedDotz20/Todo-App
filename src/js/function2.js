$("#addTask").click(taskFunction);

function taskFunction() {
	$("<div></div>").addClass("task");
	$("<li></li>").text(`${$("#input-task")}`);
}
