"use strict";
exports.__esModule = true;
exports.Pi = exports.myClass = void 0;
var myClass = /** @class */ (function () {
    function myClass(message) {
        this.message = "hej";
    }
    myClass.prototype.Show = function () {
        console.log(this.message);
    };
    return myClass;
}());
exports.myClass = myClass;
var test = new myClass("Hello World");
test.Show();
var cat = ({
    name: "Kicia",
    age: 5,
    color: "black"
});
var json = '{"name": "Max", "age": "7", "color":"yellow"}';
var myCat = JSON.parse(json);
console.log(myCat);
exports.Pi = 3.1414;
console.log(exports.Pi);
