import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsCountdownComponent } from './tabs-countdown/tabs-countdown.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AstronauteInfoComponent } from './astronaute-info/astronaute-info.component';

const routes: Routes = [
  {
    path : '',
    pathMatch: 'full',
    component : HomepageComponent
  },
  {
    path : 'iss',
    component : AstronauteInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
