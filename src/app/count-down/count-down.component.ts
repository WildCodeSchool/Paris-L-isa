import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})

export class CountDownComponent implements OnInit {

  eventDate = new Date("Jan 5, 2021 15:37:25").getTime();
  nowDate;
  count;

  countDown = setInterval(() => {

    this.nowDate = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = this.eventDate - this.nowDate;
    let count;

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

  constructor() { }

  ngOnInit() {
  }

}
