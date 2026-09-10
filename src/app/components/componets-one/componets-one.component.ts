import { Component, OnInit } from '@angular/core';
import { Demoservice } from '../../services/demo';

@Component({
  selector: 'app-componets-one',
  imports: [],
  templateUrl: './componets-one.component.html',
  styleUrl: './componets-one.component.scss'
})
export class ComponetsOneComponent implements OnInit
 {
message='';
coffees:any[]=[]
  constructor(private dataservice:Demoservice){}
 
  ngOnInit(): void {
    // this.dataservice.message$.subscribe(data=>{
    //   this.message=data

    this.coffees=this.dataservice.getcoffees();
    
  }


}
