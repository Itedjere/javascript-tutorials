class Car {
	constructor(carOwnerName) {
		this.color = "Red";
		this.yearBought = 2019;
		this.brand = "Lexus";
		this.isLeftHanded = true;
		this.carOwnerName = carOwnerName;
	}

	accelerate() {
		return `My ${this.brand} Car is accelerating`;
	}

	decelerate(speed) {
		return `My ${this.color} ${this.brand} Car Is Decelerating at a speed of ${speed}Km/H`;
	}
}

try {
	const carObject = new Car("Rhoda Itedjere");

	// document.getElementById(
	// 	"container"
	// ).innerHTML = `The Car Owner Is ${carObject.carOwnerName}`;

	// document.getElementById("container").innerHTML =
	// 	"The Car Owner Is " + carObject.carOwnerName;

	// document.getElementById("container").innerHTML = carObject.accelerate();

	document.getElementById("container").innerHTML = carObject.decelerate(70);
} catch (error) {
	alert(error.message);
}
