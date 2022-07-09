// import { currentDate, currentTime } from "../components/dateAndTime.js";

// const inputItems = document.querySelector("#todo-input").innerText;
// const addTodoBtn = document.querySelector("#addsomeItems");

const list = document.getElementById("myList");
const button = document.getElementById("addbtn");

function addItems(btn, element) {
	btn.addEventListener("click", function () {
		let node = document.createElement("li");
		const textnode = document.createTextNode("Water");
		node.appendChild(textnode);
		element.appendChild(node);
	});
}

addItems(button, list);
