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
  public showCompleted:boolean;




  constructor() { 
    this.taskListCompleted = [];
    this.taskListNoCompleted = [];
    this.showInputTask = false;
    this.errorInput = false;
    this.showCompleted = true;
    
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

     
      
    } else {
      this.errorInput = true;
      
    }

  }

  //funcion que permite eliminar un elemento desde la posicion indicada
  removeTask($event){
    this.taskListNoCompleted.splice($event,1);

  }

  completeTask($event){
    const task = this.taskListNoCompleted[$event];
    //va a cambiar la tarea a completada
    task.completed = true;
    //va a agregar la nueva fecha de la tarea
    task.date = new Date();
    //elimna la tarea del arreglo de las NO completadas
    this.taskListNoCompleted.splice($event,1);
    this.taskListCompleted.push(task);
  }

  //funcion que al momento de hacer click va a cambiar el valor de showCompleted al inverso
  showTaskCompleted(){
    this.showCompleted = !this.showCompleted;
  }

}
