//Influencer onMouseOver event
function showText(x) {
	if (x === "sam") {
		document.getElementById("sam-info").style.display = "block";
	}
	if (x === "cbum") {
		document.getElementById("cbum-info").style.display = "block";
	}
	if (x === "patty") {
		document.getElementById("patty-info").style.display = "block";
	}
}
function hideText(x) {
	if (x === "sam") {
		document.getElementById("sam-info").style.display = "none";
	}
	if (x === "cbum") {
		document.getElementById("cbum-info").style.display = "none";
	}
	if (x === "patty") {
		document.getElementById("patty-info").style.display = "none";
	}
}
