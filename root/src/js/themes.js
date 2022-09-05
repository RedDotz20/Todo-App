const body = document.getElementsByTagName("body");
const theme = document.querySelector("#theme-btn");
const darkTheme = (body.style.backgroundColor = "rgba(48, 47, 47)");
const lightTheme = (body.style.backgroundColor = "white");

theme.addEventListener("click", function (e) {
	if (e.target.style.backgroundColor !== "rgba(48, 47, 47)") {
		return darkTheme;
	}
	return lightTheme;
});
