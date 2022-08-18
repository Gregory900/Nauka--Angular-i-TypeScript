import { Component, EventEmitter, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Quotation } from '../models/quotations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

@Output() newQuotation = new EventEmitter<Quotation>();

  //Pole do ukrywania i pokazywania formularza
  showForm = true;

  //Pole quotation reprezentuje pojedynczy cytat
  quotation: Quotation = { author: '', sentence: '', votes: 0 };


  //Przełącza pole klasy true/false
  onSwitchForm(): void { 
  this.showForm = !this.showForm;
  }

  //Metoda która dodaje nowe cytaty do listy
  addQuotation(){
  this.newQuotation.emit(this.quotation);
  this.quotation={author:"", sentence:"", votes:0}
  }
}
