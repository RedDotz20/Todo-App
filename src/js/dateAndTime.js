class dateAndTime {
	constructor(date, time) {
		this.date = date;
		this.time = time;
		this.dt = new Date();
	}

	getDate() {
		let dt = this.dt;
		const date = ("0" + dt.getDate()).slice(-2);
		const month = ("0" + (dt.getMonth() + 1)).slice(-2);
		const year = dt.getFullYear();

		return dt.toLocaleDateString(); //`${date}/${month}/${year}`
	}

	getTime() {
		let dt = this.dt;
		const hour = dt.getHours() % 12 || 0; // 12 Hour Format
		const minute = dt.getMinutes();
		const second = dt.getSeconds();
		const miliSeconds = (dt.getMilliseconds() / 10) | 0;
		const ampm = hour <= 12 ? "PM" : "AM";

		return `${hour}:${minute}:${second}:${miliSeconds} ${ampm}`;
	}
}

const currentDate = new dateAndTime().getDate();
const currentTime = new dateAndTime().getTime();

// TEST
console.log(currentDate);
console.log(currentTime);

export { currentDate, currentTime };
