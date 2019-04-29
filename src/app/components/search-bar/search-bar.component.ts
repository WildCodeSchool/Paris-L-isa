import { Component, OnInit } from '@angular/core';
import { SearchBarServiceService } from '../../services/search-bar-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {

  searchText;
  items: string[];
  informations = [];

  constructor(private searchBarService: SearchBarServiceService ) {this.initializeInfos(); }

  ngOnInit() {
    this.searchBarService.getKeyWord()
    .subscribe(data => this.informations = data);
    console.log(this.informations);
  }

  initializeInfos() {
    this.items = this.informations;
  }

  getInfos(ev: any) {
    this.initializeInfos();

    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }
}
