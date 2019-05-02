import { Component, ViewChild, ElementRef } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';
import { HostListener, Inject } from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  changeColor: boolean;


  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  constructor(private planetService: PlanetService){}

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  changePlanetInfo(i) { 

    this.planetService.changePlanetInfo(i);

  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number < 25) {
      this.changeColor = false;
      
    } else {
      this.changeColor = true;
    }
  }
}


