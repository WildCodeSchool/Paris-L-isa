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
      month : '',
      eventItems : [
      ]
    },
    {
      month : '',
      eventItems : [
      ]
    },
    {
      month : '',
      eventItems : [
      ]
    },
    {
      month : '',
      eventItems : [
      ]
    },
    {
      month : '',
      eventItems : [
      ]
    },
    {
      month : '',
      eventItems : [
      ]
    },
    {
      month : '',
      eventItems : [
      ]
    },
    {
      month : '',
      eventItems : [
      ]
    },
    {
      month : '',
      eventItems : [
      ]
    },
    {
      month : '',
      eventItems : [
      ]
    },
    {
      month : '',
      eventItems : [
      ]
    },
  ];


  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  
  constructor() { }
  
  receiveData(monthName, title, description, picture, day){
    let index = this.months.indexOf(monthName);
    console.log(index);
    let eventModel = {
      name: title,
      day:day,
      description: description,
      image: picture
    };
    console.log(eventModel);
    this.events[index].eventItems.push(eventModel);
    this.events[index].eventItems.sort(day);
    console.log(this.events);
    this.saveToLocalStorage();
  }

  getEvents(index){
    return this.events[index].eventItems;
  }

  saveToLocalStorage() {
    localStorage.setItem('events', JSON.stringify(this.events));
  }
}
