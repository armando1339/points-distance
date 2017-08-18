"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
	function Point() {
		var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		_classCallCheck(this, Point);

		this.x = x;
		this.y = y;
	}

	// Move x from position by adding the value passed to the function


	_createClass(Point, [{
		key: "moveInX",
		value: function moveInX() {
			var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

			this.x += x;
		}

		// Move y from position by adding the value passed to the function

	}, {
		key: "moveInY",
		value: function moveInY() {
			var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

			this.y += y;
		}

		// Calculates the distance between the internal point and the ones passed to the function

	}, {
		key: "distance",
		value: function distance() {
			var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 0 };

			var x = this.x - p.x;
			var y = this.y - p.y;

			return Math.sqrt(x * x + y * y).toFixed(2);
		}
	}]);

	return Point;
}();

exports.default = Point;