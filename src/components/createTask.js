import { editBtnFunction, validateCheckBox } from './taskEvent.js';

const taskContainer = document.getElementById('tasks-container');
export const inputTask = document.getElementById('input-task');

export function createTaskFunction() {
	const taskValue = inputTask.value.trim();

	if (taskValue === '') {
		displayAlert('Please enter a task.');
		return;
	}

	const newTask = document.createElement('div');
	newTask.classList.add('task');

	const checkbox = createCheckbox();
	checkbox.addEventListener('click', validateCheckBox);
	newTask.appendChild(checkbox);

	const taskValContainer = createTaskValueContainer(taskValue);
	newTask.appendChild(taskValContainer);

	const editTaskButton = createButton('EDIT', 'edit', editBtnFunction);
	newTask.appendChild(editTaskButton);

	const deleteButton = createDeleteButton();
	deleteButton.addEventListener('click', deleteTask);
	newTask.appendChild(deleteButton);

	inputTask.value = '';
	taskContainer.prepend(newTask);
	console.log('New task added');
}

function displayAlert(message) {
	const alertBoxContainer = document.getElementById('alertBox-container');
	alertBoxContainer.style.display = 'block';

	const closeAlert = document.getElementById('alertClose-btn');
	closeAlert.addEventListener('click', () => {
		alertBoxContainer.style.display = 'none';
	});

	const alertMessage = document.getElementById('alertMessage');
	alertMessage.textContent = message;
}

function createCheckbox() {
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.id = 'checkboxId';
	return checkbox;
}

function createTaskValueContainer(taskValue) {
	const taskValContainer = document.createElement('div');
	taskValContainer.classList.add('content');

	const taskValueInput = document.createElement('input');
	taskValueInput.classList.add('text');
	taskValueInput.type = 'text';
	taskValueInput.value = taskValue;
	taskValueInput.setAttribute('readonly', 'readonly');

	taskValContainer.appendChild(taskValueInput);

	return taskValContainer;
}

function createButton(text, className, clickHandler) {
	const button = document.createElement('button');
	button.classList.add(className);
	button.innerText = text;
	button.addEventListener('click', clickHandler);
	return button;
}

function createDeleteButton() {
	const deleteButton = document.createElement('i');
	deleteButton.classList.add('material-icons', 'delete-btn');
	deleteButton.innerText = 'delete';
	return deleteButton;
}

function deleteTask(e) {
	const target = e.target;
	target.parentElement.remove();
}
