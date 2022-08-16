import {
	createTaskFunction,
	enterKeyFunction,
} from "/src/components/taskFunction.js";

export const addTask = document.getElementById("add-task");
export const inputTask = document.getElementById("input-task");
export const taskContainer = document.getElementById("tasks-container");

//! Event Listeners
addTask.addEventListener("click", createTaskFunction);
inputTask.addEventListener("keyup", enterKeyFunction);
