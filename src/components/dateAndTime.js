function getDateAndTime(value) {
	let year = new Date().getFullYear();
	let month = new Date().getMonth() + 1;
	let day = new Date().getDate();
	let hours = new Date().getHours();
	let minutes = new Date().getMinutes();
	let seconds = new Date().getSeconds();
	let miliseconds = (new Date().getMilliseconds() / 10) | 0;
	let session = hours >= 12 ? "PM" : "AM";

	switch (value) {
		case "date":
			return `${month}/${day}/${year}`;
		case "12hrtime":
			return `${hours % 12 || 0}:${minutes} ${session}`;
		case "24hrtime":
			return `${hours}:${minutes}`;
		default:
			return "Value out of range";
	}
}

export const currentDate = getDateAndTime("date");
export const currentTime = getDateAndTime("12hrtime");
