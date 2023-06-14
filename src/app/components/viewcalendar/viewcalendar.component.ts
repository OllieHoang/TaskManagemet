import { Component, Input } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-viewcalendar',
  templateUrl: './viewcalendar.component.html',
  styleUrls: ['./viewcalendar.component.scss']
})
export class ViewcalendarComponent {

  myArray! : Task [];

  constructor() {

  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events : (fetchInfo, successCallback, failureCallback) => {
      const events = this.myArray.map(item => {
        return {
          title: item.title,
          date: item.date,
        };
      });
      successCallback(events);
    }
  };
}
