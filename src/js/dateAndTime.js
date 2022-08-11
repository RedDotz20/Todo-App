export default class dateAndTime {
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

		// `${date}/${month}/${year}`
		return dt.toLocaleDateString();
	}

	getTime() {
		let dt = this.dt;
		const hour = dt.getHours() % 12 || 0; // 12 Hr Format
		const minute = dt.getMinutes();
		const second = dt.getSeconds();
		const miliSeconds = (dt.getMilliseconds() / 10) | 0;
		const ampm = hour <= 12 ? "PM" : "AM";

		return `${hour}:${minute}:${second}:${miliSeconds} ${ampm}`;
	}
}

export const currentDate = new dateAndTime().getDate();
export const currentTime = new dateAndTime().getTime();
