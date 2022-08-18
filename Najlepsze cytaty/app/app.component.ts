import { Component } from '@angular/core';
import {QUOTES} from './models/database';
import { Quotation } from './models/quotations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'najlepsze-cytaty';
  
  //Nowe pole reprezentujące listę cytatów
  quotes: Quotation[] = QUOTES;
  
   //Metoda obłsuguje głosowanie na najlepszy cytat
  addVote(quotation: Quotation, value:number){
    quotation.votes+=value
  }

  bestQuotes(){
    return this.quotes.filter(a => a.votes > 0);
  }

  worstQuotes(){
    return this.quotes.filter(a => a.votes < 0);
  }

  onNewQuotation(quotation: Quotation){
    this.quotes.unshift(quotation)
  }
}
