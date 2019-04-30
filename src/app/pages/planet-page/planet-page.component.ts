import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet-page',
  templateUrl: './planet-page.component.html',
  styleUrls: ['./planet-page.component.scss']
})
export class PlanetPageComponent implements OnInit {

  videoUrl: any;

  constructor(private planetVideoService: PlanetService) { }

  ngOnInit() {
    this.planetVideoService.currentIndex
  }

}
