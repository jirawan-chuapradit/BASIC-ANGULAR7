import { MyDecorator } from './my.decorator';

@MyDecorator('Hello World')
export class MyClass {
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
  