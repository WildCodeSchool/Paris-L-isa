import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Monthevents } from '../monthevents.model'

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events : Observable<any> ;
  
  eventsCollection : AngularFirestoreCollection<any>;


  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  
  constructor(private database : AngularFirestore) { 
  }

  addEvents(event : Monthevents){
    this.database.collection('events').add(event);
  }
  
  // receiveData(monthName, title, description, picture, day, place){
  //   let index = this.months.indexOf(monthName);
  //   let eventModel = {
  //     name: title,
  //     day:day,
  //     description: description,
  //     image: picture,
  //     place: place
  //   };
  //   this.events[index].eventItems.push(eventModel);
  //   let eventDay = parseInt(eventModel.day, 10);
  //   this.events[index].eventItems.sort(function(a, b){return a.day - b.day});
  //   /*this.saveToLocalStorage();*/
  // }

  getEvents(){
    return this.database.collection('events').snapshotChanges();
  }

  /*saveToLocalStorage() {
    localStorage.setItem('events', JSON.stringify(this.events));
  }*/
}
