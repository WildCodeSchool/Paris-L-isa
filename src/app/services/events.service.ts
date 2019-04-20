import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events = [
    {
      monthName : 'January',
      eventItems : [
        {
          name : 'Event title 1',
          description : 'Event about comets and other funny facts about the universe',
        },
        {
          name : 'Event title 2',
          description : 'Event about planets and other funny facts about the universe',
        }
      ]
    },
    {
    month : 'February',
    eventItems : [
        {
          name : 'February Event 1',
          description : 'Test - Event about planets and other funny facts about the universe',
        },
      ]
    },
    {
      month : 'March',
      eventItems : [
        {
          name : 'March Event 1',
          description : 'Event about BLACK HOLES',
        },
        {
          name : 'March Event 2',
          description : 'Are we alone ?',
        },
      ]
    },
    {
      month : 'April',
      eventItems : [
        {
          name : 'April Event',
          description : 'Test - Event about planets and other funny facts about the universe',
        },
      ]
    },
    {
      month : 'May',
      eventItems : [
        {
          name : 'May Event',
          description : 'Test - Event about planets and other funny facts about the universe',
        },
      ]
    },
    {
      month : 'June',
      eventItems : [
        {
          name : 'June Event 1',
          description : 'Test - Event about planets and other funny facts about the universe',
        },
        {
          name : 'June Event 2',
          description : 'Test - Event about planets and other funny facts about the universe',
        },
      ]
    },
    {
      month : 'July',
      eventItems : [
        {
          name : 'July Event 1',
          description : 'Test - Event about planets and other funny facts about the universe',
        },
      ]
    },
    {
      month : 'August',
      eventItems : [
        {
          name : 'Event ',
          description : 'Test - Event about planets and other funny facts about the universe',
        },
      ]
    },
    {
      month : 'September',
      eventItems : [
        {
          name : 'Event',
          description : 'Test - Event about planets and other funny facts about the universe',
        },
      ]
    },
    {
      month : 'October',
      eventItems : [
        {
          name : 'Event',
          description : 'Test - Event about planets and other funny facts about the universe',
        },
      ]
    },
    {
      month : 'November',
      eventItems : [
        {
          name : 'Event',
          description : 'Test - Event about planets and other funny facts about the universe',
        },
      ]
    },
    {
      month : 'December',
      eventItems : [
        {
          name : 'Last Event of the year !',
          description : 'Test - Event about planets and other funny facts about the universe',
        },
      ]
    },
  ];

  eventsTest = [
    {
      month : '',
      eventItems : [
        {
          name : '',
          description : '',
        },
      ]
    },
  ];

  receiveData(monthName, title, description, index){
    this.eventsTest[index].month = monthName;
    this.eventsTest[index].eventItems[0].name = title;
    this.eventsTest[index].eventItems[0].description = description;
    console.log(this.eventsTest);
  }


  getEvents(index){
    return this.events[index].eventItems;
  }

  constructor() { }
}
