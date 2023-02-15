// write the data to a file
// const fs = require('fs');


// Get the HTML elements by their ID
let form = document.querySelector("#form");
let dataContainer = document.querySelector("#data");

let allData = [];

// turn the current form inputs into an object
const formObj = () => {
	// Get the inputs
	let formData = new FormData(form);

	// make an object of all the inputs
	let singleData = {};

	// loop through the inputs and put them in the singleData object
	for (let [key, value] of formData) {
		singleData[key] = value;
	}

	return singleData;
}

form.addEventListener("submit", (e) => {
	// prevent the page from reloading
	e.preventDefault();

	// check if the name already exists
	let exist = allData.findIndex((data) => data.fname === formObj().fname) === -1 ? false : true;

	// add the inputs to the allData array if it doesn't exist already
	exist ? alert("name exist") : allData.push(formObj());

	// save the data to a file
	// save();

	// clear the form
	form.reset();

	// log/display allData array
	display();
	// console.log("✨", allData);
});

const display = () => {
	// clear the dataContainer
	dataContainer.innerHTML = "";

	allData.map(({ fname, lname, age, uni, email, address }) => {
		dataContainer.innerHTML += `
			<h3>
				${fname}, ${lname}, ${age}, ${uni}, ${email}, ${address}
			</h3>
		`;
	});

	// console.log("📺", allData);
}

const update = () => {
	// get the current form data
	let newData = formObj();

	// find the searched data index in the allData array
	let searchedInd = allData.findIndex((data) => data.fname === newData.fname);

	// update the searched data Only if it exists
	if (searchedInd !== -1) {
		allData[searchedInd] = newData;
	} else {
		alert("name does not exist");
	}

	display();
	// console.log("🔍", allData);
};


const remove = () => {
	// get the current form data
	let newData = formObj();

	// find the searched data index in the allData array
	let searchedInd = allData.findIndex((data) => data.fname === newData.fname);

	// remove the searched data Only if it exists
	if (searchedInd !== -1) {
		allData.splice(searchedInd, 1);
	} {
		alert("name does not exist");
	}

	display();
	// console.log("🔫", allData);
}


const save = () => {
	// convert the allData array to a string
	let dataString = allData.map(({ fname, lname, age, uni, email, address }) =>
		// `${fname}, ${lname}, ${age}, ${uni}, ${email}, ${address}\n`
		`first name: ${fname}, last name: ${lname}, age: ${age}, uni: ${uni}, email: ${email}, address: ${address}\n`
	);

	// write the data to a file
	initDownload(
		dataString,
		"data.txt",
		"data:text/json;charset=utf-8,"
	)
};

const initDownload = (function () {
	const a = document.createElement("a")
	document.body.appendChild(a)
	a.style = "display: none"
	return function (data, fileName, fileHeader) {
		a.href = fileHeader + data //Image Base64 Goes here
		a.download = fileName //File name Here
		a.click() //Downloaded file
	}
}())

