const API_URL = "http://127.0.0.1:8000/";

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
			console.log(value);
			alert(value.message);
		})
		.catch((err) => alert(err));
}

export { postBlog };
