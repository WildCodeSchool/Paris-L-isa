import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeEventService {

  tableEventSky = localStorage.getItem('tableEventSky') ? JSON.parse(localStorage.getItem('tableEventSky')) : [] ;
  
  constructor() { }

  formTohome(item) {
    this.tableEventSky.push(item);
    console.log(this.tableEventSky);
    this.saveToLocalStorage()
  }

  saveToLocalStorage() {
    localStorage.setItem('tableEventSky',JSON.stringify(this.tableEventSky));
  }


}
