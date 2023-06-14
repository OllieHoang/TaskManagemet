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
    this.todo = dataService.getTaskList();
  };

  ngOnInit(): void {
  }

  // Open Dialog show details card
  openTaskDetails(i : number){
    const dialogRef = this.dialog.open(TaskdetailsComponent);
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
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
