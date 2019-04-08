import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-countdown',
  templateUrl: './tabs-countdown.component.html',
  styleUrls: ['./tabs-countdown.component.scss']
})
export class TabsCountdownComponent implements OnInit {

  conference = false;
  eclipses = true;

  showEclipse($event) {
    $event.preventDefault();
    this.conference = false;
    this.eclipses = true;
  }

  showConference($event) {
    $event.preventDefault();
    this.conference = true;
    this.eclipses = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
