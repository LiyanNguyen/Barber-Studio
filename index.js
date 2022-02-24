let menuBtn = document.querySelector("#menuBtn");
let sideNav = document.querySelector("#sideNav");
let menu = document.querySelector("#menu");

menuBtn.onclick = () => {
	sideNav.classList.toggle('openNav');

	if (sideNav.classList.contains('openNav')) {
		menu.src = "Images/close.png";
	}

	else {
		menu.src = "Images/menu.png";
	}
}