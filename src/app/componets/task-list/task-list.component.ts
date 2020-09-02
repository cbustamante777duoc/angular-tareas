import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  //arreglo con las tareas completadas y no completadas
  public taskListNoCompleted:any = [];
  public taskListCompleted:any = [];

  public showInputTask: boolean;
  public errorInput:boolean;



  constructor() { 
    this.taskListCompleted = [];
    this.taskListNoCompleted = [];
    this.showInputTask = false;
    this.errorInput = false;
    
  }

  ngOnInit() {
  }

  //funcion que va a cambiar el valor de la variable showInputTask a true
  showInputTextTask(){
    this.showInputTask = true;
  }

  addTask(description){

    if (description) {
      const task: Task ={
        'date': new Date(),
        'description': description,
        'completed': false
      }
  
      //añadiendo una tarea al arreglo de no completadas
      this.taskListNoCompleted.push(task);
      this.errorInput = false;
      this.showInputTask = false;

      console.log(this.taskListNoCompleted);
      
    } else {
      this.errorInput = true;
      
    }

    

  }

}
