import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { EventsService } from '../../services/events.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Monthevents } from '../../monthevents.model';
import { ArrayType } from '@angular/compiler';

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
  menuIcon:boolean;

  constructor(private _events: EventsService, private db : AngularFirestore) { 
  }

  ngOnInit() {
    this.monthName = 'JANUARY';
    this.menuIcon = true;
    this._events.getEvents().subscribe(data => {
      this.events = data.map(e => {
        return {
          id : e.payload.doc.id,
          ...e.payload.doc.data()
        } as Monthevents;
    })
  })
  console.log(this.events);
}

  /* Side menu functions */

  toogleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.menuIcon = !this.menuIcon;
  }

  getNewName(newMonthName) {
    this.monthName = newMonthName;
    return this.monthName;
  }

  /* events cards functions */

  handleClick(month) {
    console.log(this.events);
  }
}
