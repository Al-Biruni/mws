import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PhoneComponent } from './phone/phone.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { PhonesComponent } from './phones/phones.component';


@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    DashboardComponent,
    MessagesComponent,
    PhonesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }