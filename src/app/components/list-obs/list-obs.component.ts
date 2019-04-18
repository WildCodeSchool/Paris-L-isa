import { Component, OnInit } from '@angular/core';
import { LeafletMapService } from 'src/app/services/leaflet-map.service';

@Component({
  selector: 'app-list-obs',
  templateUrl: './list-obs.component.html',
  styleUrls: ['./list-obs.component.scss']
})
export class ListObsComponent implements OnInit {

  map;
  observatories: any[];
  constructor(private leafMapService: LeafletMapService) { }

  ngOnInit() {
  }

  openPopup(place) {
    
  }

}
