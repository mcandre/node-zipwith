# zipwith - A Node.js port of Haskell's zipWith function

## REQUIREMENTS

 - [Node.js](http://nodejs.org/)
 - [Underscore](http://search.npmjs.org/#/underscore)

## EXAMPLE

	> var zipwith = require("zipwith").zipwith;
	> zipwith(function(a, b) { return a + b; }, [1, 2, 3], [3, 2, 1]);
	[ 4, 4, 4 ]