"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection /* TODO: fix me!*/) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var _a;
        var length = this.collection.length;
        // Bubble sort
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // All of this only works if collection is number[]
                // if collection is an array of numbers
                // Type Guard instanceof
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        _a = [
                            this.collection[j + 1],
                            this.collection[j],
                        ], this.collection[j] = _a[0], this.collection[j + 1] = _a[1];
                        // const leftHand = this.collection[j];
                        // this.collection[
                        //     j
                        // ] = this.collection[j + 1];
                        // this.collection[j + 1] = leftHand;
                    }
                }
                // Type Guard typeof
                if (typeof this.collection === "string") {
                    // All of this only works if collection is a string
                    // If collection is a string, do this logic instead:
                    //~~compare and swap characters
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
