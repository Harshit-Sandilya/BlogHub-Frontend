import { login } from "./api.js";

document.getElementsByClassName("continue-btn")[0].addEventListener("click", (event) => {
	console.log("Login Requested");
	formSubmit(event);
});

function formSubmit(event) {
	event.preventDefault();
	let mail = document.getElementById("email").value;
	let pass = document.getElementById("password").value;

	let User = {
		email: mail,
		password: pass,
	};
	login(User);
}
