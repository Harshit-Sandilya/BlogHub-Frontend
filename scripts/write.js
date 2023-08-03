import { postBlog } from "./api.js";

document.getElementsByClassName("submit-btn")[0].addEventListener("click", () => {
	console.log("Blog Submit Initiated");
	formSubmit();
});

function formSubmit() {
	console.log("formSubmit");
	let titleFeild = document.getElementsByClassName("blog-title")[0];
	let contentFeild = document.getElementsByClassName("description-text")[0];

	let Blog = {
		imgURL: "...",
		title: titleFeild.value,
		body: contentFeild.value,
		isText: true,
		user: "...",
		likes: 0,
		views: 0,
	};
	postBlog(Blog);
}
