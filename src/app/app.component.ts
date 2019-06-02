import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * this is property
   * only static, public, private, proteced
   */
  
   header:string = 'Basic angular 7';
   title:string = 'Angular 7 is very ez';

   constructor(){
     setTimeout(()=>{
      this.title = 'คอร์สพื้นฐาน Agular 7 ง่ายมาก';
     },1000)
     
   }
}






