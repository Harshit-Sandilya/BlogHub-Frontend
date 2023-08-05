import { postBlog } from "./api.js";

document.getElementsByClassName("submit-btn")[0].addEventListener("click", () => {
	console.log("Blog Submit Initiated");
	formSubmit();
});

function processBody(body) {
	return body;
}

function formSubmit() {
	let titleFeild = document.getElementsByClassName("blog-title")[0];
	let contentFeild = document.getElementsByClassName("description-text")[0];

	let processedBody = processBody(contentFeild.value);

	let Blog = {
		imgURL: "...",
		title: titleFeild.value,
		body: processedBody,
		user: "...",
		likes: 0,
		views: 0,
	};
	postBlog(Blog);
}
