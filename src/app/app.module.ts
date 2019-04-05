import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';
=======
import { TabsCountdownComponent } from './tabs-countdown/tabs-countdown.component';
>>>>>>> tabsCountdown

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavbarComponent
=======
    TabsCountdownComponent
>>>>>>> tabsCountdown
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
