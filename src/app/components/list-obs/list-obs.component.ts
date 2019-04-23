import { Component, OnInit } from '@angular/core';
import { LeafletMapService } from 'src/app/services/leaflet-map.service';

@Component({
  selector: 'app-list-obs',
  templateUrl: './list-obs.component.html',
  styleUrls: ['./list-obs.component.scss']
})
export class ListObsComponent implements OnInit {

  map;
  observatories;
  obsName = [
    'Blois Sologne Astronomy', 
    'Observatoire de Narbonne',
    'Observatoire JM. Salomon',
    'Observatoire Htes-Plates',
    'Observatoire de Hautevelle',
    'Le Refuge aux étoiles',
    'Observatoire (Botanique)',
    'Observatoires du Clain',
    'Observatoire Claude Tavenier',
    'Observatoire de Lyon',
    'Observatoire de la Lèbe',
    'Observatoire P. Joannard',
    'Centre Saint-Michel',
    'Observatoire de Puimichel',
    'Observatoire Saint-Véran',
    'Observatoire Pas Du Loup',
    'Chemin de l\'Observatoire',
    'Observatoire de Nice',
    'Observatoire de la Côte d\'Azur',
    'La SINNE. (AAA)',
    'Observatoire de Marseille'
  ];
  constructor(private leafletMapService: LeafletMapService) { }

  ngOnInit() {
    this.observatories = this.leafletMapService.marker;
  }

  displayInfoMap(i) {
    
    this.leafletMapService.dislayInfoMap(i);

  }

}
