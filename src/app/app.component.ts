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
   button:string = "เนื้อหาเพิ่มเติม";
   content:string = `
   With <a href= "http://google.com">supporting</a> text below as a natural lead-in to additional content.`


   boxId:string = `box-${Math.random()}`;
   linkAddress:string = "https://getbootstrap.com";
   jugjig:string = "angular coded by jugjig"
    styleColor:string = "red"

    alertClass:string = "alert alert-primary"
    isSuccess:boolean = true; // สำหรับตรวจสอบ ng class

   constructor(){
     setTimeout(()=>{
       this.styleColor='blue'
       this.isSuccess = false;
      this.title = 'คอร์สพื้นฐาน Agular 7 ง่ายมาก';
      this.alertClass = "alert alert-danger"
    
     },1000)
     
   }
}






