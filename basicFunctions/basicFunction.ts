class firstFunction {
    text = "Witaj ponownie";

    showtext(): void {
        console.log(this.text);
    }

    hello2(wiadomosc:string){
        console.log(wiadomosc);
    }

    hello3(message1:string, message2="hello3"){
        console.log(message1 + " text " + message2)
    }

    hello4 = message => console.log("Funkcja strzałkowa " + message);
    hello5 = () => console.log("Wywołana jeszcze nastepna funkcja");
    hello6 = (message4:string):string => {return "to już ostatni tekst"};
}

var test = new firstFunction();
test.showtext();
test.hello2("aaab");
test.hello3("parametr do wiadomosci 1");
test.hello4("Wywyłana kolejna funkcja");
test.hello6("text4");
