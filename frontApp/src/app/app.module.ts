import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PhoneComponent } from './phone/phone.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { PhonesComponent } from './phones/phones.component';
import { CompareComponent } from './compare/compare.component';
import { AdminComponent } from './admin/admin.component';
import { ConfigComponent } from './config/config.component';
import { CompareFormComponent } from './compare-form/compare-form.component';
import { PhoneFilterPipe } from './phone-filter.pipe';
import {MatNativeDateModule} from '@angular/material';
import {DemoMaterialModule} from './material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { UpComingReleasesComponent } from './up-coming-releases/up-coming-releases.component';
import { PopularComComponent } from './popular-com/popular-com.component';
import { CreatePhoneComponent } from './create-phone/create-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MessagesComponent,
    PhonesComponent,
    CompareComponent,
    AdminComponent,
    ConfigComponent,
    CompareFormComponent,
    PhoneFilterPipe,
    NewReleasesComponent,
    UpComingReleasesComponent,
    PopularComComponent,
    CreatePhoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatNativeDateModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
