import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Monthevents } from '../classes/monthevents.model'

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events : Observable<any> ;
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  constructor(private database : AngularFirestore) { }

  addEvents(event : Monthevents){
    this.database.collection('events').add(event);
  }

  getEvents(){
    return this.database.collection('events').snapshotChanges();
  }

}
