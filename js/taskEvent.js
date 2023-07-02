export const editBtnFunction = (e) => {
	const checkDone = e.target.nextElementSibling.classList;
	const textInputTarget = e.target.previousElementSibling.firstChild;

	if (e.target.innerText === 'EDIT') {
		if (!checkDone.contains('taskChecked')) {
			e.target.innerText = 'SAVE';
			textInputTarget.removeAttribute('readonly');
			textInputTarget.focus();
		}
	} else {
		e.target.innerText = 'EDIT';
		textInputTarget.setAttribute('readonly', 'readonly');
	}
};

export const validateCheckBox = (e) => {
	const target = e.target;
	const task = e.target.nextElementSibling.firstChild;
	if (!target.checked) {
		task.classList.remove('taskChecked');
	} else {
		task.classList.add('taskChecked');
	}
};
