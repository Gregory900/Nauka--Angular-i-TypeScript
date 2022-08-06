import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kurs5',
  templateUrl: './kurs5.component.html',
  styleUrls: ['./kurs5.component.css']
})
export class Kurs5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pi=Math.PI;

  dane= new Dane ("Grzegorz", "Waligórski");

  funkcja(){
    return("Jestem Pan " + this.dane.name + " a na nazwisko mam " + this.dane.surname + ".")
  }

}

class Dane{
  constructor(public name:string, public surname:string){
    };
}


