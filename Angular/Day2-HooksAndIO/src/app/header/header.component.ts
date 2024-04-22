import { Component, OnInit, ViewChild } from '@angular/core';
import { RoomComponent } from '../room/room.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  title:string = "Header Component";

  constructor() { }

  ngOnInit() {
  }

}
