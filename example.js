#!/usr/bin/env node

var zipwith = require("./zipwith");

console.log(zipwith.zipwith(function(a, b) { return a + b; }, [1, 2, 3], [3, 2, 1]));
console.log(zipwith.unzip([[1, 2], [3, 4], [5, 6]]));
