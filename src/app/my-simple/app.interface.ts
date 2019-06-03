/**
 * rule of class control popertis
 * interface no constructor
 * 
 * get array
 */
export interface IAppComponent {
    items:Array<string>;
    addItem(item:string);
    removeItem(index:number)
  }