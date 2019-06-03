import { Component, ViewChild } from '@angular/core';
import { Com1Component } from './com1/com1.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message:string = "Basic Input for component";

  @ViewChild('com1') com1:Com1Component;
  //get data from output com2
  onMessage(message:string){
    // console.log(this.message = message)

    console.log("message com1 : "+ this.com1.message)
    this.message =message
    this.com1.message = message
  }
}






