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

// converts a list into an array
// converts an array into a list

const peoplesName = [
	{
		name: "John",
		isMale: true,
	},
	{
		name: "Mary",
		isMale: false,
	},
];

const senatorsName = [
	{
		name: "John",
		isMale: false,
	},
	{
		name: "Sherrif",
		isMale: true,
	},
];

const names = [...peoplesName, ...senatorsName];

console.log(names);

// You are given an array of numbers. Find the highest number in the array. [25, 32, 17, 64, 50]

// const numbers = [25, 32, 17, 64, 50];

// const highestNumber = Math.max(...numbers);

// console.log(highestNumber);

// function formSentenceWithFirstName(...names) {
// 	let str = "";
// 	for (let name of names) {
// 		str += `My first name is ${name}`;
// 	}

// 	return str;
// }

// const aSentence = formSentenceWithFirstName("Rhoda", "Fejiro", "Joy", "Mary");

// console.log(aSentence);

// function sumOfTwoNumbers(...numbers) {
// 	let sum = 0;

// 	for (number of numbers) {
// 		sum += number;
// 	}

// 	return sum;
// }

// const answer = sumOfTwoNumbers(5, 6, 7, 8, 9);

// console.log(`The sum of all the numbers is ${answer}`);

// const newArr = ["John", "Mary", "Sonia", "Jetson", "Sophia", "Tony", "Mary"];
// const newArr4 = [5, 12, 33];

// const persons = [
// 	{
// 		id: 1,
// 		name: "John",
// 	},
// 	{
// 		id: 2,
// 		name: "Sophia",
// 	},
// 	{
// 		id: 3,
// 		name: "Blessing",
// 	},
// 	{
// 		id: 4,
// 		name: "Rhoda",
// 	},
// ];

// const capitalLetterNames = persons.map(function (item, index, array) {
// 	return item.name.toUpperCase();
// });

// console.log(capitalLetterNames);

// const fileteredArr = persons.filter(function (item, index, array) {
// 	return item.id % 2 == 1;
// });

// console.log(fileteredArr);

// const person = persons.find(function (item, index, array) {
// 	return item.id == 3;
// });

// console.log(person.name);

// console.log(newArr4.includes(121));

// const theElementIs = newArr.indexOf("Mary");

// const lastMaryIsAtIndex = newArr.lastIndexOf("Mary");

// console.log(theElementIs);

// console.log(lastMaryIsAtIndex);

// function multiplyByTwo(item) {
// 	console.log(item * 2);
// }

// "5 is at index 0"
// "12 is at index 1"
// "33 is at index 2"

// newArr4.forEach(function (item, index, array) {
// 	console.log(`${item} is at index ${index}`);
// });

// newArr.forEach(function (item, index, array) {
// 	console.log(`${item.toUpperCase()}`);
// });
