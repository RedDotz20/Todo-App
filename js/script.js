import dateAndTime from "../components/datetime/dateAndTime";
let todoItems = [];

function addItem(item) {
	const todo = {
		item,
		checked: false,
		id: Date.now(),
		time: dateAndTime.getDate(),
	};

	todoItems.push(todo);
	console.log(todoItems);
}

// TESTS
addItem("todo item #1");
addItem("todo item #2");
addItem("todo item #3");
// console.log(todoItems.map((todo) => todo.time));
