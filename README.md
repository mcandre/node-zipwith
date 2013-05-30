# zipwith - A Node.js port of Haskell's zipWith function

# REQUIREMENTS

 - [Node.js](http://nodejs.org/)
 - [Underscore](http://search.npmjs.org/#/underscore)

# DEVELOPMENT

## Linting

Keep the code tidy:

    $ npm run-script lint

# EXAMPLE

    $ git clone https://github.com/mcandre/node-zipwith.git
    $ cd node-zipwith
    $ node
    > var zipwith = require("zipwith").zipwith;
    > zipwith(function(a, b) { return a + b; }, [1, 2, 3], [3, 2, 1]);
    [ 4, 4, 4 ]
