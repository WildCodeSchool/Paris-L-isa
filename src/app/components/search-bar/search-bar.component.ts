import { Component, OnInit } from '@angular/core';
import { SearchBarServiceService } from '../../services/search-bar-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {

  searchText;
  informations = [];

  constructor(private searchBarService: SearchBarServiceService ) { }

  ngOnInit() {
    this.searchBarService.getKeyWord()
    .subscribe(data => this.informations = data);
  }


}
