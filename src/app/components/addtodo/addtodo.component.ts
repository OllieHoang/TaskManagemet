import { Component, EventEmitter, Output } from '@angular/core';
import { Task} from '../model/task.model';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data-service.service';
// import {default as _rollupMoment} from 'moment';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};
@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent {

    formAddTask : FormGroup;

    // Use FormGroup,FormBuilder to validator end easy handle
    constructor(
        private fb : FormBuilder,
        private dataService: DataService,
      ){
        this.formAddTask = fb.group({
          title : ['', Validators.required],
          description: ['', Validators.required],
          date: ['', Validators.required],
          status: 1
        })
    }

    // Add data to dataService
    onAddTask(){
      this.dataService.setTaskList(this.formAddTask.value);
      console.log(this.dataService);
    }
}
