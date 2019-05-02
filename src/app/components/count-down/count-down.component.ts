import { Component, OnInit } from '@angular/core';
import { HomeEventService } from 'src/app/services/home-event.service';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})

export class CountDownComponent implements OnInit {
  nowDate;
  count;
  dateEvent;
  eventDate;
  dateConf;

  constructor(private service: HomeEventService) { }

  ngOnInit() {
    this.dateEvent = this.service.tableEventSky["0"].date;
  }

  countDown = setInterval(() => {

    this.nowDate = new Date().getTime();
    this.eventDate = new Date(this.dateEvent).getTime();

    // Find the distance between now and the count down date
    let distance = this.eventDate - this.nowDate;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(this.countDown);
      this.count = "EXPIRED";
    }
    // Display the result in the element with id="demo"
    this.count = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  }, 1000);

}
