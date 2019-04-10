import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events = [
    {
      month : 'January',
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
          name : 'Event title 2',
          description : 'Event about planets and other funny facts about the universe',
        },
      ]
    }
  ]

  getEvents(num){
    return this.events[num].eventItems;
  }

  constructor() { }
}
