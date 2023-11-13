// Mathematical Operations

// Addition, Subtraction, Multiplication, Division, Raise to power

class Mathematical {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	addition() {
		return this.x + this.y;
	}

	subtraction() {
		return this.x - this.y;
	}

	mulitiplication() {
		return this.x * this.y;
	}

	division() {
		return this.x / this.y;
	}

	raiseToPower() {
		// return Math.pow(this.x, this.y);
		let initialProduct = 1;
		for (let i = 1; i <= this.y; i++) {
			initialProduct = initialProduct * this.x;
		}

		return initialProduct;
	}
}

export default Mathematical;
