import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConferenceEventService {

  tableConfEvent = [];

  constructor() { }

  getCalendarTable(item) {
    this.tableConfEvent = item; 
    console.log(this.tableConfEvent);
  }
}
