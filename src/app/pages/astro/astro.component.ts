<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';
>>>>>>> d9445bfdce86b03614cbee2397339e1663934279

@Component({
  selector: 'app-astro',
  templateUrl: './astro.component.html',
  styleUrls: ['./astro.component.scss']
})
export class AstroComponent implements OnInit {

  constructor() { }
<<<<<<< HEAD

  ngOnInit() {
  }
=======
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
>>>>>>> d9445bfdce86b03614cbee2397339e1663934279

}
