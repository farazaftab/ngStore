import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './templates/about/about.component';
import { ContactComponent } from './templates/contact/contact.component';
import { HomeComponent } from './templates/home/home.component';
import { NotFoundComponent } from './templates/not-found/not-found.component';
import { ServicesComponent } from './templates/services/services.component';


const routes: Routes = [
{
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
