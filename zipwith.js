#!/usr/bin/env node

var
_ = require("underscore"),
cmp = require("cmp");

var slice = Array.prototype.slice;

function zipwith(f) {
  var args = _.zip.apply(null, slice.call(arguments, 1));
  return args.map(function (arg) { return f.apply(null, arg); });
}

exports.zipwith = zipwith;

function test() {
  return (
    cmp.eq(
      zipwith(
        function (a, b) { return a + b; },
        [1, 2, 3],
        [3, 2, 1]
      ),
      [4, 4, 4]
    ) &&
      cmp.eq(
        zipwith(
          function (a, b) { if (a < b) { return a; } else { return b; } },
          [1, 2, 3],
          [7, 8, 2]
        ),
        [1, 2, 2]
      )
  );
}

exports.test = test;
