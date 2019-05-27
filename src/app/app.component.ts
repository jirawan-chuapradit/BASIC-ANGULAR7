import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements IAppComponent{
  
  items: string[] = [];

  
  /**
   * this is property
   * only static, public, private, proteced
   */
  title:string = 'BASIC-ANGULAR7';
  arrays:Number[] = [200, 300,400,500]
  objects = {
    firstname: 'my Firstname',
    lastname: 'my Lastname'
  }


  /**
   * declear function
   * defualt: plublic
   */
  onFunction(param:string):string{
    return `onFunction ${param}`;
  }

  /**
   * change funaction to property 
   * good for do something before return
   */
  get onGetFunction():string{
    const sum = 2 + 2 + 2 * 3;
    return `GetFunction : ${sum}`;
  }

  constructor(){
    const  myClass = new MyClass();
    console.log(myClass)

    // this.addItem('Hello');
    // this.addItem('world');
    // console.log(this.items)
    // this.removeItem(0)
    // console.log(this.items)
    
    /**
     * declear value
     */
  //   console.log(this.title)
  //   console.log(this.arrays)
  //   console.log(this.objects)
  //   console.log(this.onFunction("Hello world"))
  //   console.log(this.onGetFunction)
  }

  
  addItem(item: string) {
    this.items.push(item)
  }

  removeItem(index: number) {
    this.items.splice(index, 1)
  }


}

@MyDecorator('Hello World')
class MyClass {
  arrays:Number[] = [200, 300,400,500]
  objects = {
    firstname: 'my Firstname',
    lastname: 'my Lastname'
  }


  /**
   * declear function
   * defualt: plublic
   */
  onFunction(param:string):string{
    return `onFunction ${param}`;
  }

  /**
   * change funaction to property 
   * good for do something before return
   */
  get onGetFunction():string{
    const sum = 2 + 2 + 2 * 3;
    return `GetFunction : ${sum}`;
  }

  constructor () {
    this.arrays.push(600);
    this.arrays.push(700);
  }

}


/**
 * rule of class control popertis
 * interface no constructor
 * 
 * get array
 */
interface IAppComponent {
  items:Array<string>;
  addItem(item:string);
  removeItem(index:number)
}


function MyDecorator(message:string){
  return function(target:Function){
    target.prototype.sayHello = message
  }
}
