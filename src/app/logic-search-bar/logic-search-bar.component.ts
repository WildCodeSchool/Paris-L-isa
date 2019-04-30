import { Component, OnInit } from '@angular/core';
import { SearchBarServiceService } from '../services/search-bar-service.service';

@Component({
  selector: 'app-logic-search-bar',
  templateUrl: './logic-search-bar.component.html',
  styleUrls: ['./logic-search-bar.component.scss']
})
export class LogicSearchBarComponent implements OnInit {


  constructor(private searchBarService: SearchBarServiceService) { }

  ngOnInit() {

  }

}
