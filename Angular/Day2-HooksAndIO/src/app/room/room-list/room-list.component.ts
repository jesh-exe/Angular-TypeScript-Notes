import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { emit } from 'process';
import { RoomList } from '../room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],

  // This is the change detection strategy, will be implemented if we want to achieve immutable state as well as rendering.
  // In this if we modify the room list in parent component, it wont be reflected here
  // We need to create a new list everytime for rendering of the data (refer addRoom() in roomComponent)
  changeDetection : ChangeDetectionStrategy.OnPush 

})
export class RoomListComponent implements OnInit, OnChanges {

  // This is the way to tell Angular that this is the input parameter from the parent
  // This parameter is binded two ways and will affect the changes altogether if it is changed from either the parent or child
  @Input() rooms : RoomList [] = []
  
  // This is the way to send data back to the parent using event emitter from angular core library
  @Output() room  = new EventEmitter<RoomList>();

  constructor() { }

  // This will be called whenever the input parameters are changed or modified
  ngOnChanges(changes: SimpleChanges): void {
    // changes is an object of SimpleChanges interface which has majorly 3 properties
    // previousValue, currentValue, firstChange(boolean)
    if(changes['rooms'].currentValue)
    {
      console.log(changes['rooms'].currentValue);
    }
  }

  ngOnInit() {
  }

  selectedRoom(roomSelected : RoomList)
  {
    // This way we emit the data from child to parent
    // We also need to receive the data in the parent
    this.room.emit(roomSelected);
  }




}