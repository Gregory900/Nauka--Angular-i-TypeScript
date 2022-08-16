import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskName!:string
  config: {[key: string]: string} | null = null;

  tasks: Task[] = [
    {
    name: "siłownia",
    deadline: "2022-08-17",
    done:false
    },
    {
      name: "nauka Angulara",
      deadline: "2022-08-20",
      done:false
    },
    {
      name: "rolki",
      deadline: "2022-08-21",
      done:false
    }
  ];

  constructor(){
    this.config={
      title: "Nowa Lista Zadań",
      footer: "Wszelkie prawa zastrzeżone",
      date: new Date().toDateString()
    };
  }

  clearTask(){
    this.tasks=[];
  }

  onKeyUp(event: KeyboardEvent){
    let target = event.target as HTMLInputElement
    this.taskName = target.value;
  }

  createTask(){
    const task: Task ={
      name: this.taskName,
      deadline: "2022-08-25",
      done: false,
    };
    this.tasks.push(task);
  }
}
