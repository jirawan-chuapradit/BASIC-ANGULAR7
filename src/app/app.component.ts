import { Component, ViewChild } from '@angular/core';
import { Com1Component } from './com1/com1.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message:string = "Basic Input for component";
  delete:boolean = false;


  //get data from output com2
  onMessage(message:string){
    console.log(this.message = message)
    this.message =message;
  }
}






