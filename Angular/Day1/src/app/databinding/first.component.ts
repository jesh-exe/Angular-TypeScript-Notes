import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  details = {
    name : "Jayesh",
    address : "Bella Casa,Pune"
  }
  
  constructor() { }
  
  ngOnInit() {
    
  }

  handleClick(){
    alert("Clicked")
  }
}

