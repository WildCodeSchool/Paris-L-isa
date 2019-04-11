import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleCalendarDataService {
  private _url : string = 'https://apis.google.com/js/api.js';

  constructor(private http : HttpClient) { }

  getCalendarData() {
    return this.http.get(this._url);
  }

}
