"use strict";

var
_ = require("underscore"),
c = require("rho-contracts"),
cmp = require("cmp");

var slice = Array.prototype.slice;

var zipwith = c.fun({ f: c.fun().extraArgs(c.any).returns(c.any) })
.extraArgs(c.array(c.any))
.returns(c.array(c.any))
.wrap(
    function(f) {
        var args = _.zip.apply(null, slice.call(arguments, 1));
        return args.map(function (arg) { return f.apply(null, arg); });
    }
);

exports.zipwith = zipwith;

var unzip = c.fun({ list: c.array(c.any) })
.returns(c.array(c.array(c.any)))
.wrap(
    function(list) {
        var
        xs = [],
        ys = [];

        for (var i = 0; i < list.length; i++) {
            var
            pair = list[i],
            x = pair[0],
            y = pair[1];

            xs.push(x);
            ys.push(y);
        }

        return [xs, ys];
    }
);

exports.unzip = unzip;

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
        ) &&
        cmp.eq(
            unzip([[1, 2], [3, 4], [5, 6]]),
            [[1, 3, 5], [2, 4, 6]]
        )
    );
}

exports.test = test;
