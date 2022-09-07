export function editBtnFunction(e) {
	let editButton = document.querySelector(".edit");
	let checkDone = e.target.nextElementSibling.classList;
	let textInput = editButton.previousElementSibling.firstChild;
	if (editButton.innerText == "EDIT") {
		if (!checkDone.contains("taskChecked")) {
			editButton.innerText = "SAVE";
			textInput.removeAttribute("readonly");
			textInput.focus();
		}
	} else {
		editButton.innerText = "EDIT";
		textInput.setAttribute("readonly", "readonly");
	}
}
