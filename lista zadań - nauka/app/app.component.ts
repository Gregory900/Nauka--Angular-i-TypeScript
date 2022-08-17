import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editMode = false
  taskName = "Sugerowane zadanie: trening"
  taskDate=""
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
      done:true
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
    this.sortTasks()
  }

  clearTask(){
    this.tasks=[];
  }

  createTask(){
    const task: Task ={
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskName="";
    this.taskDate="";
    this.sortTasks()
  }

  switchEditMode(){
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task){
    task.done=true
    this.sortTasks()
  }

  removeTask(task: Task){
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTasks()
  }

  private sortTasks(){
    this.tasks = this.tasks.sort((a: Task, b: Task ) =>
    a.done === b.done ? 0 : a.done ? 1 : -1);
  }
}
