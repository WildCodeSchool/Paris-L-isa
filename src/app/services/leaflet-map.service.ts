import { Injectable } from '@angular/core';
import * as L from 'leaflet';
@Injectable({
  providedIn: 'root'
})
export class LeafletMapService {

  constructor() { }

  initMap() {
    const map = L.map('map').setView([46.793027, 2.761534], 6);
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
      L.marker([48.29326, 2.43269]).addTo(map)
          .bindPopup('Observatoire 1')
          .openPopup();
      L.marker([47.58841, 1.33461]).addTo(map)
      .bindPopup('Observatoire 2')
      .openPopup();
    }
}
