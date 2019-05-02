import { Component, OnInit, DoCheck } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet-page',
  templateUrl: './planet-page.component.html',
  styleUrls: ['./planet-page.component.scss']
})
export class PlanetPageComponent implements OnInit, DoCheck {

  currentIndexVideo;
  booleanVideoScreenSize = false;
  backgroundPlanetTab = [
    '../../assets/planetImgBackGround/saturn.jpg',
    '../../assets/planetImgBackGround/neptune.jpg',
    '../../assets/planetImgBackGround/venus.jpg',
    '../../assets/planetImgBackGround/earth.jpg'
  ]


  constructor(private planetVideoService: PlanetService) { }

  ngOnInit() {
    this.currentIndexVideo = this.planetVideoService.currentIndex;    

    if ( window.innerWidth <= 1087 ) {

      this.booleanVideoScreenSize = true;
      
    }


  }

  ngDoCheck() {

    if (this.currentIndexVideo != this.planetVideoService.currentIndex) {
      this.currentIndexVideo = this.planetVideoService.currentIndex;
    }

  }

}
