import createTaskFunction from "/src/components/function.js";

export const addTask = document.getElementById("add-task");
export const inputTask = document.getElementById("input-task");
export const taskContainer = document.getElementById("tasks-container");

addTask.addEventListener("click", createTaskFunction);
