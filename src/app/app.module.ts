import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TabsCountdownComponent } from './components/tabs-countdown/tabs-countdown.component';
import { CountDownComponent } from './components/count-down/count-down.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MonthsMenuComponent } from './components/months-menu/months-menu.component';
import { EventsService } from './services/events.service';
import { LiveVideoComponent } from './components/live-video/live-video.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsCountdownComponent,
    CountDownComponent,
    FooterComponent,
    NavbarComponent,
    TabsCountdownComponent,
    CalendarComponent,
    HomepageComponent,
    MonthsMenuComponent,
    HomepageComponent,
    LiveVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
