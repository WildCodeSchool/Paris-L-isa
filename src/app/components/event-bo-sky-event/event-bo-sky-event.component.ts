import { Component, OnInit } from '@angular/core';

import { SkyEvent } from '../../class/SkyEvent'


@Component({
  selector: 'app-event-bo-sky-event',
  templateUrl: './event-bo-sky-event.component.html',
  styleUrls: ['./event-bo-sky-event.component.scss']
})

export class EventBoSkyEventComponent implements OnInit {


  skyEvent: SkyEvent = new SkyEvent();

  constructor() { }

  ngOnInit() {
  }

/* Creation of skyEvent objet*/
onSubmit () {
  console.log(this.skyEvent);
}



}
