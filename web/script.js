// Get the form
let form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	// Get the inputs

	let data = new FormData(form);

	console.log(data.get("fname"));
});
