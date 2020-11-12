"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var merge_anything_1 = require("merge-anything");
var My = /** @class */ (function () {
    function My() {
    }
    return My;
}());
var input = {
    baz: '',
};
var defaults = {
    foo: 'bar',
};
var result = merge_anything_1.merge(defaults, input);
