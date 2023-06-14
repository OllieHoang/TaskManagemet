import { EventEmitter, Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { Task } from '../components/model/task.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  taskList : Task [] = [
    {
      title: "task 1",
      description: "111",
      date: new Date,
      status: 1
    },
    {
      title: "task 2",
      description: "111",
      date: new Date,
      status: 1
    },
    {
      title: "task 3",
      description: "111",
      date: new Date,
      status: 2
    }
  ];
  taskListChange: EventEmitter<any> = new EventEmitter();
  constructor() {}
  
  //Get all data
  getTaskList() : Task[]{
    return this.taskList;
  }

  //Get task status todo
  getTaskTodo(): Task[]{
    return this.taskList.filter(task => task.status === 1);
  }

  // Get task status doing
  getTaskDoing(): Task[]{
    return this.taskList.filter(task => task.status === 2);
  }

  // Get task status done
  getTaskDone(): Task[]{
    return this.taskList.filter(task => task.status === 3);
  }

  // Update data
  setTaskList(newTask: Task): void{
    this.taskList.push(newTask);
    this.taskListChange.emit(this.taskList);
  }
  
  //Edit task
  editTask(newTask: Task): void{
      this.deleteTask(newTask);
      this.setTaskList(newTask);
  }

  //delete data
  deleteTask(task: Task): void {
    const index = this.taskList.indexOf(task);
    if (index !== -1) {
      this.taskList.splice(index, 1);
    }
    this.taskListChange.emit(this.taskList);
  }

  //Change status
  handleChangeStatus(index: number, status: number) : void{
    this.taskList[index].status = status;
  }
}
