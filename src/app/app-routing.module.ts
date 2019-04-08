import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsCountdownComponent } from './tabs-countdown/tabs-countdown.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  {
    path : '',
    pathMatch: 'full',
    component : HomepageComponent
  },
  {
    path : 'agenda',
    component : CalendarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
