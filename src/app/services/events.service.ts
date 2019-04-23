import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events =  localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [
    {
      month : '',
      eventItems : [
      ]
    },
    {
      month : 'test',
      eventItems : [
      ]
    },
    {
      month : 'test2',
      eventItems : [
      ]
    },
  ];

  eventModel = {
    name : '',
    description : '',
  };


  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  index:number;

  receiveData(monthName, title, description){
    this.index = this.months.indexOf(monthName);
    this.eventModel.name = title;
    this.eventModel.description = description;
    this.events[this.index].eventItems.push(this.eventModel);
    console.log(this.events);
    this.saveToLocalStorage();
  }


  getEvents(index){
    return this.events[index].eventItems;
  }

  constructor() { }

  saveToLocalStorage() {
    localStorage.setItem('events', JSON.stringify(this.events));
}
}
