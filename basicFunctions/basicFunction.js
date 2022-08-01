var firstFunction = /** @class */ (function () {
    function firstFunction() {
        this.text = "Witaj ponownie";
        this.hello4 = function (message) { return console.log("Funkcja strzałkowa " + message); };
        this.hello5 = function () { return console.log("Wywołana jeszcze nastepna funkcja"); };
        this.hello6 = function (message4) { return "to już ostatni tekst"; };
    }
    firstFunction.prototype.showtext = function () {
        console.log(this.text);
    };
    firstFunction.prototype.hello2 = function (wiadomosc) {
        console.log(wiadomosc);
    };
    firstFunction.prototype.hello3 = function (message1, message2) {
        if (message2 === void 0) { message2 = "hello3"; }
        console.log(message1 + " text " + message2);
    };
    return firstFunction;
}());
var test = new firstFunction();
test.showtext();
test.hello2("aaab");
test.hello3("parametr do wiadomosci 1");
test.hello4("Wywyłana kolejna funkcja");
test.hello6("text4");
