import { Component, OnInit } from '@angular/core';
import { Monthevents } from '../../classes/monthevents.model';
import { EventsService } from '../../services/events.service';
import { HomeEventService } from 'src/app/services/home-event.service';


@Component({
  selector: 'app-event-bo-conference',
  templateUrl: './event-bo-conference.component.html',
  styleUrls: ['./event-bo-conference.component.scss']
})
export class EventBoConferenceComponent implements OnInit {

  events: Monthevents[];


  constructor(private _events: EventsService, private eventConf: HomeEventService) { }

  ngOnInit() {
    this._events.getEvents().subscribe(data => {
      this.events = data.map(e => {
        return {
          id : e.payload.doc.id,
          ...e.payload.doc.data()
        } as Monthevents;
      });console.log(this.events)
    })
  }

  promoteConf(index) {
    this.eventConf.confTohome(this.events[index]);
  }
}

