import { register } from "./api.js";

document.getElementsByClassName("continue-btn")[0].addEventListener("click", (event) => {
	console.log("New user addition initiated");
	formSubmit(event);
});

function formSubmit(event) {
	event.preventDefault();
	let mail = document.getElementById("email").value;
	let pass = document.getElementById("password").value;

	let User = {
		username: mail,
		password: pass,
	};
	register(User);
}
