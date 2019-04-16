import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-astro',
  templateUrl: './astro.component.html',
  styleUrls: ['./astro.component.scss']
})
export class AstroComponent implements OnInit {

  constructor() { }
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;
  ngOnInit() {

    const mapProperties = {
      center: new google.maps.LatLng(46.8639059, 2.3478985),
      zoom: 7,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    }

}
