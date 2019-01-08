import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {PhonesComponent  } from './phones/phones.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import {PhoneComponent  } from './phone/phone.component';
const routes: Routes =[

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'phones', component: PhonesComponent},
  {path: 'details/:id ' , component :PhoneComponent }
  //,{path: 'compare', component compare}

];
@NgModule({
 imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
