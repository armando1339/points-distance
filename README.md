# points-distance.js

Calculate the distance between two points

## Installation

```
npm install points-distance
```

## Usage

```
import Point from 'points-distance'


const p1 = new Point(0,4);
const p2 = new Point(3,0);


// Operations with p1
console.log( p1.distance(p2) );
p1.moveInX(1);
console.log( p1.distance(p2) );
p1.moveInY(1);
console.log( p1.distance(p2) );

// Operations with p2
console.log( p2.distance(p1) );
p2.moveInX(1);
console.log( p2.distance(p1) );
p2.moveInY(1);
console.log( p2.distance(p1) );
```

## Credits 

- [Armando Alejandre](http://armando-alejandre.herokuapp.com/)

## License

[MIT](https://opensource.org/licenses/MIT)