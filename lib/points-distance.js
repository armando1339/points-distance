class Point {
	constructor(x=0,y=0) {
		this.x = x;
		this.y = y;
	}

	// Move x from position by adding the value passed to the function
	moveInX(x=0) {
		this.x += x;
	}

	// Move y from position by adding the value passed to the function
	moveInY(y=0) {
		this.y += y;
	}

	// Calculates the distance between the internal point and the ones passed to the function
	distance(p={x: 0, y: 0}) {
		const x = this.x - p.x;
		const y = this.y - p.y;

		return Math.sqrt(x*x + y*y).toFixed(2);
	}
}

export default Point;