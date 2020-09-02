import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  //arreglo con las tareas completadas y no completadas
  public taskListNoCompleted:any = [];
  public taskListCompleted:any = [];


  constructor() { 
    this.taskListCompleted = [];
    this.taskListNoCompleted = [];
    
  }

  ngOnInit() {
  }

}
