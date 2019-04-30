import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Monthevents } from '../classes/monthevents.model';

@Injectable({
  providedIn: 'root'
})
export class HomeEventService {

  tableEventSky = localStorage.getItem('tableEventSky') ? JSON.parse(localStorage.getItem('tableEventSky')) : [] ;
  tableEventConf: Observable<any>;

  constructor(private database : AngularFirestore) { }

  formTohome(item) {
    this.tableEventSky.push(item);
    console.log(this.tableEventSky);
    this.saveToLocalStorage()
  }

  saveToLocalStorage() {
    localStorage.setItem('tableEventSky',JSON.stringify(this.tableEventSky));
  }

  confTohome(item: Monthevents) {
    this.database.collection('conferenceEvent').add(item);
  }

  sendToConf() {
    return this.database.collection('conferenceEvent').snapshotChanges();
  }
}
