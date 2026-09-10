import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";



@Injectable({
    providedIn:'root'
})

export class Demoservice{

//  private messageSubject=new BehaviorSubject<string>('hello');

//  message$=this.messageSubject.asObservable();

// sendMessage(message:string){
//     this.messageSubject.next(message)

 coffees = [
    {
      id: 1,
      name: 'Espresso',
      price: 100
    },
    {
      id: 2,
      name: 'Cappuccino',
      price: 150
    },
    {
      id: 3,
      name: 'Latte',
      price: 180
    }
  ];

  getcoffees(){
    return this.coffees
  }
}

