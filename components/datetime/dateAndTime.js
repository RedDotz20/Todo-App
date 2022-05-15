const dateAndTime = {
	dt: new Date(),

	getDate: function () {
		// Get Date
		const date = ("0" + dt.getDate()).slice(-2);
		const month = ("0" + (dt.getMonth() + 1)).slice(-2);
		const year = dt.getFullYear();

		return `${date}/${month}/${year}`;

		// Return Date and Time
		// const currentDate = `${date}/${month}/${year}`;
		// const currentTime = dt.toLocaleTimeString();
		// return `${currentTime}`;
	},

	getTime: function () {
		// Get Time
		const hour = dt.getHours() % 12 || 0; // 12 Hour Format
		const minute = dt.getMinutes();
		const second = dt.getSeconds();
		const miliSeconds = (dt.getMilliseconds() / 10) | 0;
		const ampm = hour >= 12 ? "PM" : "AM";

		return `${hour}:${minute}:${second}:${miliSeconds} ${ampm}`;
	},
};

export default dateAndTime;
