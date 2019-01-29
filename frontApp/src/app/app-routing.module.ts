import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {PhonesComponent  } from './phones/phones.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import {PhoneComponent  } from './phone/phone.component';
import { CompareComponent } from './compare/compare.component';
import {AdminComponent } from './admin/admin.component';
import {PopularComComponent} from './popular-com/popular-com.component';
import {CreatePhoneComponent} from './create-phone/create-phone.component';
const admin = "Ah234"
const routes: Routes =[

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'phones', component: PhonesComponent},
    { path: 'compare', component: CompareComponent },
      { path: 'popularCompare', component: PopularComComponent },
    {path:admin,component:AdminComponent},
    {path:'create',component:CreatePhoneComponent}


  //,{path: 'compare', component compare}

];
@NgModule({
 imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
