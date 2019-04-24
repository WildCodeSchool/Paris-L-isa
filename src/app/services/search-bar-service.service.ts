import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IkeyWord } from '../components/search-bar/key-word';

@Injectable({
  providedIn: 'root'
})
export class SearchBarServiceService {
// tslint:disable-next-line: variable-name
  private _url = '../assets/searchBar-json/apiSearchBar.json';

  constructor(private http: HttpClient) { }

  get(): Observable<[]> {
    return this.http.get<[]>(this._url);
  }
}
