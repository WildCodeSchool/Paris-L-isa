import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-astronaute-info',
  templateUrl: './astronaute-info.component.html',
  styleUrls: ['./astronaute-info.component.scss']
})
export class AstronauteInfoComponent implements OnInit {

  conditionNick: boolean = true;
  conditionAnne: boolean = false;


  constructor() { }

  ngOnInit() {
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


}


