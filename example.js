#!/usr/bin/env node

var zipwith = require("./zipwith").zipwith;

console.log(zipwith(function(a, b) { return a + b; }, [1, 2, 3], [3, 2, 1]));
