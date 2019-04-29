import { Component, OnInit } from '@angular/core';
import { HomeEventService } from 'src/app/services/home-event.service';
import { Pipe } from '@angular/core';

@Component({
  selector: 'app-tabs-countdown',
  templateUrl: './tabs-countdown.component.html',
  styleUrls: ['./tabs-countdown.component.scss']
})
export class TabsCountdownComponent implements OnInit {

  eventList = [];
  conferences = false;
  eclipses = true;

  showEclipse($event) {
    $event.preventDefault();
    this.conferences = false;
    this.eclipses = true;
  }

  showConference($event) {
    $event.preventDefault();
    this.conferences = true;
    this.eclipses = false;
  }

  

  constructor(private service: HomeEventService) { }

  ngOnInit() {
    this.eventList = this.service.tableEventSky;
  }
  
}
