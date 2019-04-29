import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-history-science',
  templateUrl: './tabs-history-science.component.html',
  styleUrls: ['./tabs-history-science.component.scss']
})
export class TabsHistoryScienceComponent implements OnInit {

  history = false;
  sciences = true;

  showHistory($event) {

    this.history = false;
    this.sciences = true;
    console.log('Eclipse')
  }

  showSciences($event) {

    this.history = true;
    this.sciences = false;
    console.log('Conference')
  }

  constructor() { }

  ngOnInit() {
  }

}
