import { Component } from '@angular/core';
import { Task } from './components/model/task.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isShowCalendar : boolean = false;

  title = 'tasks-management';
  taskList : Task [] = [];

  constructor() {
  }

  onShowCalendar(){
    this.isShowCalendar = !this.isShowCalendar;
  }

  onTaskAdd(newTask: Task) {
    this.taskList.push(newTask);

  }
}
