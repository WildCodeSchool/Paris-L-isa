import { Component, OnInit, DoCheck } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet-page',
  templateUrl: './planet-page.component.html',
  styleUrls: ['./planet-page.component.scss']
})
export class PlanetPageComponent implements OnInit, DoCheck {

  currentIndexVideo;
  constructor(private planetVideoService: PlanetService) { }

  ngOnInit() {
    this.currentIndexVideo = this.planetVideoService.currentIndex;
  }

  ngDoCheck() {

    if (this.currentIndexVideo != this.planetVideoService.currentIndex) {
      this.currentIndexVideo = this.planetVideoService.currentIndex;
    }

  }

}
