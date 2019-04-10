import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-astronaute-info',
  templateUrl: './astronaute-info.component.html',
  styleUrls: ['./astronaute-info.component.scss']
})
export class AstronauteInfoComponent implements OnInit {

  conditionNick: boolean = true;
  conditionAnne: boolean = false;

  mobileScreen: boolean;
  displaySummary = true;
  displayExperience = true;



  constructor() { }

  ngOnInit() {
    if (screen.width < 450) {
      this.mobileScreen = true;
      this.displaySummary = false;
      this.displayExperience = false;
      }
  }

  actionNick($event) {
  $event.preventDefault();
  this.conditionNick = true;
  this.conditionAnne = false;
  };

  actionAnne($event){
    $event.preventDefault();
    this.conditionAnne = true;
    this.conditionNick = false;
  }

  actionArticle() {

    this.displaySummary = !this.displaySummary;
  }

  actionArticleExperience() {
    this.displayExperience = !this.displayExperience;
  }

}


