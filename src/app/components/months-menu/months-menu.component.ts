import { Component, OnInit, Output } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-months-menu',
  templateUrl: './months-menu.component.html',
  styleUrls: ['./months-menu.component.scss'],
})
export class MonthsMenuComponent implements OnInit {

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  month :string;

  @Output() sendMonth(){}


  constructor(private _eventsService : EventsService) { }

  ngOnInit() {
  }

  getMonthEvents(index) {
    console.log("keep going");
    this.month = this.months[index];
  }

}
