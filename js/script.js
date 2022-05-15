import { currentDate, currentTime } from "../components/dateAndTime.js";
let todoItems = [];

function addItem(item) {
	const todo = {
		item,
		checked: false,
		id: Date.now(),
		date: currentDate,
		time: currentTime,
	};

	todoItems.push(todo);
	console.log(todoItems);
}

function toggleDone(key) {
	const index = todoItems.findIndex((item) => item.id == Number(key));
	todoItems[index].checked = !todoItems[index.checked];
	renderTodo(todoItems[index]);
}

// TESTS
// addItem("todo item #1");
// addItem("todo item #2");
// addItem("todo item #3");
// addItem("todo item #4");

console.log(todoItems.map((todo) => todo.date));
