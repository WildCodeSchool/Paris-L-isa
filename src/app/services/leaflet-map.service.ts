import { Injectable } from '@angular/core';
import * as L from 'leaflet';
@Injectable({
  providedIn: 'root'
})
export class LeafletMapService {
  marker: any[];
  constructor() { }

  initMap() {
    const map = L.map('map').setView([46.793027, 2.761534], 6);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    this.marker = [
    L.marker([47.58841, 1.33461]).addTo(map)
        .bindPopup('Blois Sologne Astronomie')
        .openPopup(),
    L.marker([43.14797, 2.97095]).addTo(map)
        .bindPopup('Observatoire Astronomique de Narbonne')
        .openPopup(),
    L.marker([48.29326, 2.43269]).addTo(map)
        .bindPopup('Observatoire Jean Marc Salomon')
        .openPopup(),
    L.marker([47.30246, 4.9608]).addTo(map)
        .bindPopup('Observatoire des Hautes-Plates')
        .openPopup(),
    L.marker([47.83801, 6.30271]).addTo(map)
        .bindPopup('Observatoire de Hautevelle')
        .openPopup(),
    L.marker([44.17097, 1.76777]).addTo(map)
        .bindPopup('Le refuge aux étoiles')
        .openPopup(),
    L.marker([43.6158, 3.87211]).addTo(map)
        .bindPopup('Observatoire - Institut de Botanique')
        .openPopup(),
    L.marker([46.30149, 0.35855]).addTo(map)
        .bindPopup('Observatoires du Clain')
        .openPopup(),
    L.marker([44.2035, 5.51112]).addTo(map)
        .bindPopup('CosmoDrôme - Observatoire Claude Tavenier')
        .openPopup(),
    L.marker([45.69388, 4.78299]).addTo(map)
        .bindPopup('Observatoire de Lyon')
        .openPopup(),
    L.marker([45.91576, 5.62628]).addTo(map)
        .bindPopup('Observatoire de la Lèbe')
        .openPopup(),
    L.marker([46.19344, 5.33816]).addTo(map)
        .bindPopup('Observatoire Pierre Joannard (Association Astronomique de l\'Ain)')
        .openPopup(),
    L.marker([43.90635, 5.72735]).addTo(map)
        .bindPopup('Centre d\'Astronomie Saint-Michel L\'Observatoire')
        .openPopup(),
    L.marker([43.98014, 6.0209]).addTo(map)
        .bindPopup('Puimichel Observatory')
        .openPopup(),
    L.marker([44.69693, 6.90689]).addTo(map)
        .bindPopup('Observatoire de Saint-Véran')
        .openPopup(),
    L.marker([44.83016, 6.56385]).addTo(map)
        .bindPopup('Gîte-refuge et observatoire astronomique Le Pas Du Loup')
        .openPopup(),
    L.marker([43.74759, 6.91511]).addTo(map)
        .bindPopup('Chemin de l\'Observatoire')
        .openPopup(),
    L.marker([43.72038, 7.30494]).addTo(map)
        .bindPopup('Observatoire de Nice')
        .openPopup(),
    L.marker([43.72738, 7.29909]).addTo(map)
        .bindPopup('Observatoire de la Côte d\'Azur')
        .openPopup(),
    L.marker([43.56086, 5.67087]).addTo(map)
        .bindPopup('La SINNE. Astronomes Amateurs Aixois')
        .openPopup(),
    L.marker([43.44267, 5.25853]).addTo(map)
        .bindPopup('Observatoire de Marseille')
        .openPopup()
    ]

  }
  
  dislayInfoMap(item) {
    this.marker[item].openPopup();
  }
    
}
