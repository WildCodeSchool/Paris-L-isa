import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AstronauteInfoComponent } from './components/astronaute-info/astronaute-info.component';
import { TabsCountdownComponent } from './components/tabs-countdown/tabs-countdown.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AstropageComponent } from './pages/astropage/astropage.component';
import { LiveVideoComponent } from './components/live-video/live-video.component';
import { PlanetPageComponent } from './pages/planet-page/planet-page.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AgendaComponent} from './pages/agenda/agenda.component';
import { AboutComponent } from './pages/about/about.component';
import { AgendaBOComponent } from './components/agenda-bo/agenda-bo.component';
import { HomePageEventBoComponent } from './pages/home-page-event-bo/home-page-event-bo.component';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    },
    {
      path: 'home',
      component: HomepageComponent
    },
    {
      path: 'agenda',
      component: AgendaComponent
    },
    {
      path: 'astro',
      component: AstropageComponent
    },
    {
      path: 'about',
      component: ContactFormComponent
    },
    {
      path: 'live',
      component: LiveVideoComponent
    },
    {
      path: 'planet',
      component: PlanetPageComponent
    },
    {
      path: 'back-office',
      component: AgendaBOComponent
    },
    {
      path: 'back-office-event',
      component: HomePageEventBoComponent
    }
];

@NgModule({ imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

