import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  animations : [
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
  januaryEvents : any;
  menuState:string = 'out';

  constructor(private _events : EventsService) { }
  
  ngOnInit() {
    this.januaryEvents = this.displayEvent(0);
  }
  
  toogleMenu() { 
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  displayEvent(num){
    return this._events.getEvents(num);
  };
}
