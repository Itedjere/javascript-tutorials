let ownerName = "John";

const car = {
	name: "Volvo",
	color: "White",
	isNew: true,
	numSeaters: 4,
};

function welcome() {
	alert("Welcome To My House");
}

function chooseYourMeal(menuNumber) {
	const meals = ["Ogbolor Soup", "Banga Soup", "Fried Rice", "Beans"];
	let chosenMeal = meals[menuNumber];

	alert(`We are going to give you ${chosenMeal}`);
}

export { ownerName, car, welcome };

export default chooseYourMeal;
