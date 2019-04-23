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
    'Blois Sologne Astronomie', 
    'Observatoire Astronomique de Narbonne',
    'Observatoire Jean Marc Salomon',
    'Observatoire des Hautes-Plates',
    'Observatoire de Hautevelle',
    'Le Refuge aux étoiles',
    'Observatoire - Institut de Botanique',
    'Observatoires du Clain',
    'CosmoDrôme - Observatoire Claude Tavenier',
    'Observatoire de Lyon',
    'Observatoire de la Lèbe',
    'Observatoire Pierre Joannard',
    'Centre d\'Astronomie Saint-Michel',
    'Puimichel Observatory',
    'Observatoire de Saint-Véran',
    'Observatoire astronomique Le Pas Du Loup',
    'Chemin de l\'Observatoire',
    'Observatoire de Nice',
    'Observatoire de la Côte d\'Azur',
    'La SINNE. Astronomes Amateurs Aixois',
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
