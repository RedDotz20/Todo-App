"use strict"; //! STRICT MODE ENABLED
import { inputTask, createTaskFunction } from "./components/createTask.js";
const addTask = document.getElementById("add-task");

//! CREATE TASK FUNCTION
addTask.addEventListener("click", createTaskFunction);

//! Enter Event Handler
inputTask.addEventListener("keyup", function (e) {
	e.preventDefault();
	if (e.keyCode === 13) addTask.click();
});
