import { Component, OnInit, DoCheck } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';
import { WindowRef } from '@agm/core/utils/browser-globals';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit, DoCheck{

  tabGrad = [];
  tabUnit = [0, 10, 20, 30];
  planetName = ['Saturn', 'Neptune', 'Venus', 'Earth']
  currentIndex: number;

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    for (let i = 0; i < 31 ; i ++) {
      this.tabGrad.push('');
    }

  }
  
  ngDoCheck(){

    if (this.currentIndex != this.planetService.currentIndex) {

      this.currentIndex = this.planetService.currentIndex;

    }


  }

  changePlanetInfo(i) { 
    
    this.currentIndex = this.planetService.changePlanetInfo(i);

  }

}
