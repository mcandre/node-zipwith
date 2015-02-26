"use strict";

var
assert = require("assert"),
qc = require("quickcheck"),
cmp = require("cmp"),
zipwith = require("../lib/zipwith");

describe("zipwith", function() {
  describe("should be able to zip", function () {
    it("should zip", function() {
      assert.equal(
        cmp.eq(
          zipwith.zipwith(function (a, b) { return [a, b]; }, [1, 2, 3], [4, 5, 6]),
          [[1, 4], [2, 5], [3, 6]]
        ),
        true
      );
    });
  });

  describe("should be able to unzip", function() {
    it("should unzip", function() {
      assert.equal(
        cmp.eq(
          zipwith.unzip([[1, 4], [2, 5], [3, 6]]),
          [1, 2, 3, 4, 5, 6]
        ),
        true
      );
    });
  });

  describe("reversible", function() {
    it("should be reversible", function() {
      function propReversible(xs, ys) {
        if (xs.length === ys.length) {
          return cmp.eq(
            zipwith.unzip(zipwith.zipwith(function (a, b) { return [a, b]; }, xs, ys)),
            xs.concat(ys)
          );
        }
        else {
          return true;
        }
      }

      function arbIntArray() { return qc.arbArray(qc.arbByte); }

      assert.equal(true, qc.forAll(propReversible, arbIntArray, arbIntArray));
    });
  });
});
