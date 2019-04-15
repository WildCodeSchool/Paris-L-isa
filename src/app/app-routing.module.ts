import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsCountdownComponent } from './components/tabs-countdown/tabs-countdown.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LiveVideoComponent } from './components/live-video/live-video.component';
import { AgendaComponent } from './pages/agenda/agenda.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component : HomepageComponent
  },
  {
    path : 'agenda',
    component : AgendaComponent
  },
  {
    path: 'live',
    pathMatch: 'full',
    component: LiveVideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
