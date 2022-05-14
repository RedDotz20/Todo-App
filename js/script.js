let todoItems = [];

function addTodo(item) {
	const todo = {
		item,
		checked: false,
		id: Date.now(),
	};
	todoItems.push(todo);
	console.log(todoItems);
}
