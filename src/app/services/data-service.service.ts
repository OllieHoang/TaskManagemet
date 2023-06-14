import { Injectable } from '@angular/core';
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
      status: 1
    }
  ];
    
  constructor() { }

  //Get data
  getTaskList() : Task[]{
    return this.taskList;
  }

  // Update data
  setTaskList(newTask: Task): void{
    this.taskList.push(newTask)
  }
  
  //delete data
  deleteTask(task: Task): void {
    const index = this.taskList.indexOf(task);
    if (index !== -1) {
      this.taskList.splice(index, 1);
    }
  }

  //Change status
  handleChangeStatus(index: number, status: number) : void{
    this.taskList[index].status = status;
  }
}
