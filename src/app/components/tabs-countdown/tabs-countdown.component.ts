import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-countdown',
  templateUrl: './tabs-countdown.component.html',
  styleUrls: ['./tabs-countdown.component.scss']
})
export class TabsCountdownComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
