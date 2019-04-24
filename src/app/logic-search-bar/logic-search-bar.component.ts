import { Component, OnInit } from '@angular/core';
import { SearchBarServiceService } from '../services/search-bar-service.service';


@Component({
  selector: 'app-logic-search-bar',
  templateUrl: './logic-search-bar.component.html',
  styleUrls: ['./logic-search-bar.component.scss']
})
export class LogicSearchBarComponent implements OnInit {
  informations = [];
  keyWords : string[];

  constructor(private searchBarService: SearchBarServiceService) { }

  ngOnInit() {
    this.searchBarService.get()
    .subscribe(data => this.informations = data);
        console.log(this.informations.includes(this.keyWords))
        
  }

}
