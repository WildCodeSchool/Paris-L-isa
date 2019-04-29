import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { EventsService } from '../../services/events.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Monthevents } from '../../monthevents.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class CalendarComponent implements OnInit {
  events: Monthevents[];
  menuState: string = 'out';
  num: number;
  monthName: string;
  eventsToDisplay: Monthevents[];
  month:string;
  monthEvents: unknown;
  menuIcon:boolean;

  constructor(private _events: EventsService, private db : AngularFirestore) { 
  }

  ngOnInit() {
    this.monthName = 'January';
    this.menuIcon = true;
    this._events.getEvents().subscribe(data => {
      this.events = data.map(e => {
        return {
          id : e.payload.doc.id,
          ...e.payload.doc.data()
        } as Monthevents;
      });
      this.displayEvents();
    })
}

  /* Side menu function */

  toogleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.menuIcon = !this.menuIcon;
  }

  /* Getting clicked month name */

  getNewName(newMonthName) {
    this.monthName = newMonthName;
    this.displayEvents();
    return this.monthName;
  }

  /* function to display cards according to current month name */

  displayEvents() {
    this.eventsToDisplay = [];
    
    for (let i = 0; i < this.events.length; i++) {
      if (this.monthName === this.events[i].monthName) { 
        console.log(typeof this.events[i].eventDay);
        this.eventsToDisplay.push(this.events[i]);
      }
    }
    this.eventsToDisplay.sort(function(a, b){return a.eventDay - b.eventDay});
  }

}
