import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IkeyWord } from '../components/search-bar/key-word';

@Injectable({
  providedIn: 'root'
})
export class SearchBarServiceService {

  private url = '../assets/searchBar-json/apiSearchBar.json';

  constructor(private http: HttpClient) { }

  getKeyWord(): Observable<IkeyWord[]> {
    return this.http.get<IkeyWord[]>(this.url);
  }

}
