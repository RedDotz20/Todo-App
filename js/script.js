// Resources:
// https://freshman.tech/todo-list/#prerequisites

let todoItems = [];

const dateAndTime = {
	dt: new Date(),

	date: function () {
		// Get Date
		const date = ("0" + dt.getDate()).slice(-2);
		const month = ("0" + (dt.getMonth() + 1)).slice(-2);
		const year = dt.getFullYear();

		// Return Date and Time
		const currentDate = `${date}/${month}/${year}`;
		const currentTime = dt.toLocaleTimeString();
		return `${currentTime}`;
	},

	time: function () {
		// Get Time
		const hour = dt.getHours() % 12 || 0; // 12 Hour Format
		const minute = dt.getMinutes();
		const second = dt.getSeconds();
		const miliSeconds = (dt.getMilliseconds() / 10) | 0;
		const ampm = hour >= 12 ? "PM" : "AM";
	},

	getDate: function () {
		return `${date}/${month}/${year}`;
	},

	// Return Time
	getTime: function () {
		return `${hour}:${minute}:${second}:${miliSeconds} ${ampm}`;
	},
};

function addTodo(item) {
	const todo = {
		item,
		checked: false,
		id: Date.now(),
		time: dateAndTime(),
	};

	todoItems.push(todo);
	console.log(todoItems);
}

// TESTS
addTodo("todo item #1");
addTodo("todo item #2");
addTodo("todo item #3");
// console.log(todoItems.map((todo) => todo.time));
