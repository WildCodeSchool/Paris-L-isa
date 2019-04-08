import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsCountdownComponent } from './tabs-countdown/tabs-countdown.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  {
    path : 'home',
    component : TabsCountdownComponent
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
