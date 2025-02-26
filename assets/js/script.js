document.querySelectorAll("a").forEach((elem) => {
	elem.onclick = function (e) {
		e.preventDefault();
		window.location.href = "";
		return false;
	};
});
