import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsCountdownComponent } from './tabs-countdown/tabs-countdown.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LiveVideoComponent } from './live-video/live-video.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent
  },
  {
    path: 'live',
    component: LiveVideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
