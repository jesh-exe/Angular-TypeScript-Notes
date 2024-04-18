import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter :number = 0;

  constructor() { }

  ngOnInit() {
  }

  increaseCounter = () => {
    this.counter = this.counter+1;
  }

  decreaseCounter = () => {
    if(this.counter <= 0)
    {
      alert("Counter Cannot be Less than 0")
    }
    else
    {
      this.counter = this.counter-1;
    }
  }

}
