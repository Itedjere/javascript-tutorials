const todosArr = [];

function showAlert() {
	const todoTextField = document.getElementById("todoTextField");
	const greeting = todoTextField.value;

	if (greeting === "") {
		return;
	}

	// Push Greeting into the array
	todosArr.push(greeting);

	// Make text field empty
	todoTextField.value = "";

	// Loopt through the array
	let text = "";
	for (let todo of todosArr) {
		text += `<li class="list-group-item">${todo}</li>`;
	}

	document.getElementById("todosWrapper").innerHTML = text;
}

document.getElementById("addTodoBtn").addEventListener("click", showAlert);
