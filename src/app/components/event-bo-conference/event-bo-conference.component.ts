import { Component, OnInit } from '@angular/core';
import { Monthevents } from '../../classes/monthevents.model';


@Component({
  selector: 'app-event-bo-conference',
  templateUrl: './event-bo-conference.component.html',
  styleUrls: ['./event-bo-conference.component.scss']
})
export class EventBoConferenceComponent implements OnInit {

  events: Monthevents[];


  constructor() { }

  ngOnInit() {
  }

}
