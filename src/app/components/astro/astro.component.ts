import { Component } from '@angular/core';
import { LeafletMapService } from 'src/app/services/leaflet-map.service';
@Component({

  selector: 'app-astro',
  templateUrl: './astro.component.html',
  styleUrls: ['./astro.component.scss'],

})
export class AstroComponent {

  map;

  constructor(public leafletMapService: LeafletMapService) {}
  ngOnInit() {
    this.map = this.leafletMapService.initMap();
  }

 
}
