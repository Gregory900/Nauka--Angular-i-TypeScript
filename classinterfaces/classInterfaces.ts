export class myClass{

    message:string="hej";

    constructor (message?:string) {
    }
        Show(){
            console.log(this.message);
        }
}

let test = new myClass("Hello World");
test.Show();

interface Cat{
    name:string;
    age: number;
    color:string;
    date?:Date;
}

let cat: Cat=({
name:"Kicia", 
age:5, 
color:"black"
})



let json='{"name": "Max", "age": "7", "color":"yellow"}';

let myCat: Cat =JSON.parse(json);
console.log(myCat);

export const Pi =3.1414;
console.log(Pi);
