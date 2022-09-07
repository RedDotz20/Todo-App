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

export function checkBtnFunction(e) {
	let textInputTarget =
		e.target.previousElementSibling.previousElementSibling.firstChild.style;
	let checkTarget = e.target.classList;
	if (checkTarget.contains("taskChecked")) {
		checkTarget.remove("taskChecked");
		textInputTarget.cssText = `
            color: null;
            text-decoration = null;
            transition = "200ms";
        `;
	} else {
		checkTarget.add("taskChecked");
		textInputTarget.cssText = `
	        text-decoration: line-through;
	        color: rgb(0, 255, 0);
	        transition: 350ms;
	    `;
	}
}
