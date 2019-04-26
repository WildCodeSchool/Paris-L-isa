import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TabsCountdownComponent } from './components/tabs-countdown/tabs-countdown.component';
import { CountDownComponent } from './components/count-down/count-down.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MonthsMenuComponent } from './components/months-menu/months-menu.component';
import { EventsService } from './services/events.service';
import { LiveVideoComponent } from './components/live-video/live-video.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { AstronauteInfoComponent } from './components/astronaute-info/astronaute-info.component';
import { LiveComponent } from './pages/live/live.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AstroComponent } from './components/astro/astro.component';
import { AboutComponent } from './pages/about/about.component';
import { AstropageComponent } from './pages/astropage/astropage.component';
import { ListObsComponent } from './components/list-obs/list-obs.component';


import { AgmCoreModule } from '@agm/core';
import { PlanetPageComponent } from './pages/planet-page/planet-page.component';
import { PlanetComponent } from './components/planet/planet.component';
import { AgendaBOComponent } from './components/agenda-bo/agenda-bo.component';

@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    FooterComponent,
    NavbarComponent,
    TabsCountdownComponent,
    ContactFormComponent,
    AstronauteInfoComponent,
    CalendarComponent,
    HomepageComponent,
    MonthsMenuComponent,
    HomepageComponent,
    LiveVideoComponent,
    AgendaComponent,
    LiveComponent,
    SearchBarComponent,
    AstroComponent,
    AboutComponent,
    AstropageComponent,
    ListObsComponent,
    PlanetPageComponent,
    PlanetComponent,
    AgendaBOComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBrG5ywjbq-2E1tu0fWTH1x0oENVVQNGYY'
    })
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
