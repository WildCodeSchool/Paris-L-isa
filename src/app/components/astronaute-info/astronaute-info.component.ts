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

  selectedAstroControl = new FormControl();

  astronauts = [];
  astro;


  constructor(public getAstroService: GetAstrosService) { }

  ngOnInit() {

    this.getAstroService.getAstros()
    .subscribe(data => this.astronauts = data);

    if (screen.width < 450) {
      this.mobileScreen = true;
      this.displaySummary = false;
      this.displayExperience = false;
      }
    this.loadScriptsTwitter();
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
    console.log('marche');

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

  changeAstro(astro) {
    if (astro.name === 'Nick Hague') {
      astro = 'Nick Hague' ? console.log('mthfckr') : console.log('bernichouchou');
      this.conditionNick = true;
      this.conditionAnne = false;
      this.loadScriptsTwitter();

    } else if (astro.name === 'Anne McClain') {
      astro = 'Anne McClain' ? console.log('Masther HUUUUU') : console.log('bernichouchou');
      this.conditionAnne = true;
      this.conditionNick = false;
      this.loadScriptsTwitter();

    } else {
      return this.astronauts[0].name = 'Astronauts';
    }

  }

}


