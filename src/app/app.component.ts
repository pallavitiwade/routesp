import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Demoservice } from './services/demo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports:[MatButtonModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'routesp';
coffees:any[]=[]



  constructor (private dataservice:Demoservice){}
  ngOnInit(): void {
    this.coffees=this.dataservice.getcoffees();

  }

  

}
