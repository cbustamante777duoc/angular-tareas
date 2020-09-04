import { Task } from './../../../interfaces/Task';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  //recibe dos variables desde el padre
  @Input() task: Task;
  @Input() index: number;

  //envia dos eventos al padre
  @Output() remove: EventEmitter<number>;
  @Output() complete:EventEmitter<number>;

  constructor() { 
    this.remove =  new EventEmitter<number>();
    this.complete =  new EventEmitter<number>();
  }

  ngOnInit() {
  }

  //funcion que verfica si la tarea esta checheada usa el index que recibio del padre
  taskCheckedEvent(){
    this.complete.emit(this.index);

  }

  //fuincion que elimina una tarea usando el index que recibe del padre
  removeEvent(){
    this.remove.emit(this.index);

  }

}
