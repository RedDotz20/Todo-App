// Resources:
// https://freshman.tech/todo-list/#prerequisites

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

function renderTodo(todo) {
	// Select the first element with a class of 'todo-list'
	const list = document.querySelector(".todo-list");

	// Use the ternary operator to check if `todo.checked` is true
	// if so, assign 'done' to `isChecked`. Otherwise, assign an empty string
	const isChecked = todo.checked ? "done" : "";

	// Create an `li` element and assign it to `node`
	const node = document.createElement("li");

	// Set the class attribute
	node.setAttribute("class", `todo-item ${isChecked}`);

	// Set the data-key attribute to the id of the todo
	node.setAttribute("data-key", tods.id);

	// Set the contents of the `li` element created above
	node.innerHTML = `
        <input id="${todo.id}" type="checkbox"/>
        <label for="${todo.id}" class="tick js-tick"></label>
        <span>${todo.text}</span>
        <button class="delete-todo js-delete-todo">
        // <svg><use href="#delete-icon"></use></svg>
        </button>
    `;

	// Append the element to the DOM as the last child of
	// the element referenced by the `list` variable
	list.append(node);
}

// Select the form element
const form = document.querySelector(".todo-form");

form.addEventListener("submit", (event) => {
	// prevent page refresh on form submission
	event.preventDefault();
	// select the text input
	const input = document.querySelector(".todo-input");

	// Get the value of the input and remove whitespace
	const text = input.value.trim();
	if (text !== "") {
		addTodo(text);
		input.value = "";
		input.focus();
	}
});
