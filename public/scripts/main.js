const pathname = window.location.pathname.replaceAll(/([/])/g, '').trim();
const page = ( pathname != "" ? pathname : "home" );
document.getElementById(page).classList.add("active");

const list = document.querySelectorAll(".nav-list li");
list.forEach((item) => {
	item.addEventListener("mouseleave", function(e) {
		list.forEach((li) => li.classList.remove("active"));
		document.getElementById(page).classList.add("active");
	});

	item.addEventListener("mouseenter", function(e) {
		list.forEach((li) => li.classList.remove("active"));
		e.currentTarget.classList.add("active");
	});
});

const btnSwitchTheme = document.getElementById('btnSwitchTheme');
btnSwitchTheme.addEventListener('click', () => {
	document.body.classList.toggle('magenta-theme');
	document.body.classList.toggle('purple-theme');
});
