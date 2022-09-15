const openSidebar = document.getElementById("open-sidebar");
const sidebar = document.querySelector(".sidebar-tasks");

openSidebar.addEventListener("click", function () {
	sidebar.style.width == "0px"
		? (sidebar.style.width = "50%")
		: (sidebar.style.width = "0px");
});
