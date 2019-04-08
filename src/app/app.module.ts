import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TabsCountdownComponent } from './components/tabs-countdown/tabs-countdown.component';
import { CountDownComponent } from './components/count-down/count-down.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsCountdownComponent,
    CountDownComponent,
    FooterComponent,
    NavbarComponent,
    TabsCountdownComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
