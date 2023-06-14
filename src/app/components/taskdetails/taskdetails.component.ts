import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../model/task.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.scss']
})
export class TaskdetailsComponent {
  // ttChange : string = '';
  // desChange : string = '';
  dateValue : string ='';

  isEdit : boolean = true;  
  dataChange : Task []=[];
  date = new FormControl();

  constructor(
    public dialogRef: MatDialogRef<TaskdetailsComponent>,
    private datePipe: DatePipe
  ){
    
  };

  closeDetails(){
    this.dialogRef.close();
  }

  onEdit(){
    this.isEdit = !this.isEdit;
  }

  onSave(){
    // this.dataChange.push({
    //   title: this.data.title,
    //   description: this.data.description,
    //   date: this.data.date,
    // })
    this.isEdit = !this.isEdit;
    // this.dialogRef.close(...this.dataChange);
  }
}
