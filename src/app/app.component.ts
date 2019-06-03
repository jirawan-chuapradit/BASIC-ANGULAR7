import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message:string = "Basic Input for component";

  //get data from output com2
  onMessage(message:string){
    console.log(this.message = message)
  }
}






