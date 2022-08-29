import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnswersComponent } from './componenets/answers/answers.component';
import { QuestionsComponent } from './componenets/questions/questions.component';


@NgModule({
  declarations: [AppComponent, AnswersComponent, QuestionsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}