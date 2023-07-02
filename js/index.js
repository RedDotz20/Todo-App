'use strict';

import { createTaskFunction, inputTask } from './createTask.js';
const addTask = document.getElementById('add-task');

addTask.addEventListener('click', createTaskFunction);

inputTask.addEventListener('keyup', function (e) {
	e.preventDefault();
	if (e.keyCode === 13) addTask.click();
});
