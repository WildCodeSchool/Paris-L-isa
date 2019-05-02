import { Component, OnInit } from '@angular/core';
import { HomeEventService } from 'src/app/services/home-event.service';
import { Monthevents } from '../../classes/monthevents.model';


@Component({
  selector: 'app-count-down-conf',
  templateUrl: './count-down-conf.component.html',
  styleUrls: ['./count-down-conf.component.scss']
})
export class CountDownConfComponent implements OnInit {
  nowDate;
  count;
  dateConf;
  eventDate;
  confToPromote = [];

  constructor(private service: HomeEventService) { }

  ngOnInit() {
    this.service.sendToConf().subscribe(data => {
      this.confToPromote = data.map(e => {
        return {
          id : e.payload.doc.id,
          ...e.payload.doc.data()
        } as Monthevents;
      });
    this.dateConf = this.confToPromote[0].monthName.slice(0,3) + ' ' + this.confToPromote[0].eventDay + ',' + ' ' + '2020' + ' ' + '12:00:00';
    });
  }

  countDown = setInterval(() => {

    this.nowDate = new Date().getTime();
    this.eventDate = new Date(this.dateConf).getTime();

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
