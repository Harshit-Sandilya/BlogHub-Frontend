const API_URL = "http://127.0.0.1:8000/";
let UserDetails = null;

function postBlog(data) {
	fetch(`${API_URL}write`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			mode: "cors",
			"Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((value) => {
			alert(value.message);
		})
		.catch((err) => alert(err));
}

function register(data) {
	fetch(`${API_URL}register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			mode: "cors",
			"Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((value) => {
			alert(value.message);
		})
		.catch((err) => alert(err));
}

function login(data) {
	fetch(`${API_URL}login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			mode: "cors",
			"Access-Control-Allow-Origin": "*",
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((value) => {
			alert(value.message);
			UserDetails = value.data;
		})
		.catch((err) => alert(err));
}

export { postBlog, register, login };
