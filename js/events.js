export function editBtnFunction(e) {
	let checkDone = e.target.nextElementSibling.classList;
	let textInputTarget = e.target.previousElementSibling.firstChild;

	if (e.target.innerText == "EDIT") {
		if (!checkDone.contains("taskChecked")) {
			e.target.innerText = "SAVE";
			textInputTarget.removeAttribute("readonly");
			textInputTarget.focus();
		}
	} else {
		e.target.innerText = "EDIT";
		textInputTarget.setAttribute("readonly", "readonly");
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
