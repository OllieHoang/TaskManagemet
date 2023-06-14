import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../model/task.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.scss']
})
export class TaskdetailsComponent {

  
  formEditTask : FormGroup;

  constructor(
    private fb : FormBuilder,
    public dialogRef: MatDialogRef<TaskdetailsComponent>,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: Task,
  ){
    this.formEditTask = fb.group({
      title : '',
      description: '',
      date: '',
      status: 1
    })
  };

  closeDetails(){
    this.dialogRef.close();
  }

  onSave(){
    this.dataService.editTask(this.formEditTask.value)
  }
}
