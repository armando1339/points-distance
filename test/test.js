const expect = require('chai').expect;
const Point = require('..').default;

describe('Point', function() {

	describe('#moveInX()', function() {
		it('move x from position by adding the value passed to the function', function() {
			const p1 = new Point(0,4);
			p1.moveInX(4);
			expect(p1.x).to.equal(4);
		});
	});

	describe('#moveInY()', function() {
		it('move y from position by adding the value passed to the function', function() {
			const p1 = new Point(0,4);
			p1.moveInY(4);
			expect(p1.y).to.equal(8);
		});

	});

	describe('#distance()', function() {
		it('calculates the distance between the internal point and the ones passed to the function', function() {
			const p1 = new Point(0,4);
			const p2 = new Point(3,0);
			expect(p1.distance(p2)).to.equal('5.00');
		});
	});
});