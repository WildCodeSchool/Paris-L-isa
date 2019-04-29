import { Component, OnInit } from '@angular/core';
import { HomeEventService } from '../../services/home-event.service';
import { SkyEvent } from '../../class/SkyEvent'
import { Services } from '@angular/core/src/view';


@Component({
  selector: 'app-event-bo-sky-event',
  templateUrl: './event-bo-sky-event.component.html',
  styleUrls: ['./event-bo-sky-event.component.scss']
})

export class EventBoSkyEventComponent implements OnInit {


  skyEvent: SkyEvent = new SkyEvent();

  constructor(private service: HomeEventService) { }

  ngOnInit() {
  }

/* Creation of skyEvent objet*/
onSubmit () {
  this.service.formTohome(this.skyEvent);
  console.log(this.skyEvent);
}

}
