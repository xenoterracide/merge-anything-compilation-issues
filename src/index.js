"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var merge_anything_1 = require("merge-anything");
var My = /** @class */ (function () {
    function My() {
        this._foo = '';
    }
    return My;
}());
var input = {
    baz: 'override',
};
var defaults = {
    foo: 'a',
    bar: 'b',
    baz: 'c',
};
var Bar = /** @class */ (function () {
    function Bar(my) {
    }
    return Bar;
}());
new Bar(merge_anything_1.merge(defaults, input));
