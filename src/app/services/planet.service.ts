import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  currentIndex = 0;

  constructor() { }

  changePlanetInfo(i) { 
    
    this.currentIndex = i;
    return this.currentIndex;

  }

}
