import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-event-bo',
  templateUrl: './home-page-event-bo.component.html',
  styleUrls: ['./home-page-event-bo.component.scss']
})
export class HomePageEventBoComponent implements OnInit {

  switchButtonConf=false;
  switchButtonSky=true;

  constructor() { }

  ngOnInit() {
  }
  onSwitchConf() {
    this.switchButtonConf= !this.switchButtonConf;
    this.switchButtonSky= !this.switchButtonSky;
  }

  onSwitchSky() {
    this.switchButtonConf= !this.switchButtonConf;
    this.switchButtonSky= !this.switchButtonSky;
  }
}
