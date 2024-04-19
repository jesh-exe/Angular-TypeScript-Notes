import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { emit } from 'process';
import { RoomList } from '../room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  // This is the way to tell Angular that this is the input parameter from the parent
  // This parameter is binded two ways and will affect the changes altogether if it is changed from either the parent or child
  @Input() rooms : RoomList [] = []
  
  // This is the way to send data back to the parent using event emitter from angular core library
  @Output() room  = new EventEmitter<RoomList>();

  constructor() { }

  ngOnInit() {
  }

  selectedRoom(roomSelected : RoomList)
  {
    // This way we emit the data from child to parent
    // We also need to receive the data in the parent
    this.room.emit(roomSelected);
  }

}