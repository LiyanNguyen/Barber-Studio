let menuBtn = document.querySelector("#menuBtn");
let sideNav = document.querySelector("#sideNav");
let menu = document.querySelector("#menuImg");

menuBtn.onclick = () => {
	sideNav.classList.toggle('openNav');

	if (sideNav.classList.contains('openNav')) {
		menu.src = "Images/close.png";
	}

	else {
		menu.src = "Images/menu.png";
	}
}

window.onscroll = () => {
	if (sideNav.classList.contains('openNav')) {
		sideNav.classList.remove('openNav');
		menu.src = "Images/menu.png";
	}
}

//======= FUNCTION TO WAIT FOR ENTIRE FILES TO PARSE FIRST =======//
let checkIfDocumentFullyLoaded = () => {
	if (document.readyState === "complete") {
		// make the entire page visible
		document.querySelector('body').removeAttribute('style');
		// remove the interval call to this function
		clearInterval(checkPageLoad);
	}
};
let checkPageLoad = setInterval(checkIfDocumentFullyLoaded, 100);