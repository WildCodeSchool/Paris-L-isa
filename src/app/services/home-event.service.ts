import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeEventService {

  tableEventSky=[]
  
  constructor() { }

  formTohome(item) {
    this.tableEventSky.push(item);
    console.log(this.tableEventSky);
  }

}
