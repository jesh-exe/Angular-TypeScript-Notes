import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Room } from '../room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  @Input() rooms : Room[]

  @Output() room = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public addData(){
    this.room.emit({
      no : 5,
      type : "Normal Suite",
      price : 2500,
      ammenities : ["TV","Gas","AC","Geyser"],
      status : "Not Available"
    })
  }

}
