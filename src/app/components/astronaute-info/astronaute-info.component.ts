import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GetAstrosService } from 'src/app/services/get-astros.service';



@Component({
  selector: 'app-astronaute-info',
  templateUrl: './astronaute-info.component.html',
  styleUrls: ['./astronaute-info.component.scss']
})
export class AstronauteInfoComponent implements OnInit {

  conditionNick = true;
  conditionAnne = false;

  mobileScreen: boolean;
  displaySummary = true;
  displayExperience = true;

  astronauts = [];

  selectedAstroControl = new FormControl();

  nh;
  am;

  constructor(public getAstroService: GetAstrosService) { }

  ngOnInit() {
    if (screen.width < 450) {
      this.mobileScreen = true;
      this.displaySummary = false;
      this.displayExperience = false;
      }
    this.loadScriptsTwitter();

    this.getAstroService.getAstros()
    .subscribe(data => this.astronauts = data);
  }

  actionNick($event) {
  $event.preventDefault();
  this.conditionNick = true;
  this.conditionAnne = false;
  this.loadScriptsTwitter();
  }

  actionAnne($event) {
    $event.preventDefault();
    this.conditionAnne = true;
    this.conditionNick = false;
    this.loadScriptsTwitter();

  }

  actionArticle() {

    this.displaySummary = !this.displaySummary;
  }

  actionArticleExperience() {
    this.displayExperience = !this.displayExperience;
  }

  loadScriptsTwitter() {
    const dynamicScripts = ['https://platform.twitter.com/widgets.js'];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  compareAstro(astro1) {

  }

}


