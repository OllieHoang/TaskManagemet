import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Task } from '../model/task.model';
import { MatDialog } from '@angular/material/dialog';
import { TaskdetailsComponent } from '../taskdetails/taskdetails.component';
import { DataService } from 'src/app/services/data-service.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo : Task [] = [];
  doing:  Task [] = [];
  done : Task [] = [];

  constructor(
    private dialog : MatDialog,
    private dataService : DataService,
    private datePipe: DatePipe,
    
  ){
    
    this.todo = dataService.getTaskTodo();
    this.doing = dataService.getTaskDoing();
    this.done = dataService.getTaskDone();
  };

  ngOnInit(): void {
    this.dataService.taskListChange.subscribe((newTaskList) => {
      this.todo = newTaskList;
      this.todo = this.dataService.getTaskTodo();
    });
  }

  // Open Dialog show details card
  openTaskDetails(i : Task){
    const dialogRef = this.dialog.open(TaskdetailsComponent,{
      data : i
    });
  }
  
  // Delete task (todo, doing, done)
  deleteTask(i : Task){
    this.dataService.deleteTask(i);
  }
  
  //format date show on UI
  formatDate(date : Date){
    const formattedDate = this.datePipe.transform(date, 'dd/MM/YYYY')
    return formattedDate;
  }

  //Change status 
  changeStatus(){
    
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      const task = event.previousContainer.data[event.previousIndex];

      task.status = event.container.data === this.done 
      ? 3 
      : event.container.data === this.doing ? 2 : 1;

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log(this.dataService.getTaskList());
      
    }
  }
}
