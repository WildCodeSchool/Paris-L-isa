import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsCountdownComponent } from './tabs-countdown/tabs-countdown.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


const routes: Routes = [
  {
    path : '',
    pathMatch: 'full',
    component : HomepageComponent
  },
  {
    path : 'about',
    pathMatch: 'full',
    component : ContactFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
