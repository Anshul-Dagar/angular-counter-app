import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './app-counter.component.html',
  styleUrls: ['./app-counter.component.css']
})
export class AppCounterComponent implements OnInit {

  count: number 
  constructor() {
    this.count=0;
   }

  ngOnInit(): void {
    
  }

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }

}
