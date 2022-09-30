export const editBtnFunction = (e) => {
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
};

export const validateCheckBox = (e) => {
	let target = e.target;
	let task = e.target.nextElementSibling.firstChild;
	!target.checked
		? task.classList.remove("taskChecked")
		: task.classList.add("taskChecked");
};
