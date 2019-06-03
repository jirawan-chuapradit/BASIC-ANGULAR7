import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap';

import {FormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { Com2Component } from './com2/com2.component';
import { Com1Component } from './com1/com1.component';

@NgModule({
  declarations: [
    AppComponent,
    Com2Component,
    Com1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
