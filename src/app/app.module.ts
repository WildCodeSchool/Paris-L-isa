import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

import { AngularFireModule } from '@angular/fire'; /* A tester avec la db de page contact en plus */
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
import { SearchBarServiceService } from './services/search-bar-service.service';
import { PlanetPageComponent } from './pages/planet-page/planet-page.component';
import { PlanetComponent } from './components/planet/planet.component';
import { AgendaBOComponent } from './components/agenda-bo/agenda-bo.component';
import { HomePageEventBoComponent } from './pages/home-page-event-bo/home-page-event-bo.component';
import { EventBoSkyEventComponent } from './components/event-bo-sky-event/event-bo-sky-event.component';
import { EventBoConferenceComponent } from './components/event-bo-conference/event-bo-conference.component';
import { TabsHistoryScienceComponent } from './components/tabs-history-science/tabs-history-science.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CountDownConfComponent } from './components/count-down-conf/count-down-conf.component';

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
    AgendaBOComponent,
    HomePageEventBoComponent,
    EventBoSkyEventComponent,
    EventBoConferenceComponent,
    PlanetPageComponent,
    PlanetComponent,
    AgendaBOComponent,
    TabsHistoryScienceComponent,
    FilterPipe,
    CountDownConfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.calendarDb),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBrG5ywjbq-2E1tu0fWTH1x0oENVVQNGYY'
    }),
    FormsModule
  ],
  providers: [
    EventsService,
    SearchBarServiceService,
    AngularFirestoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
