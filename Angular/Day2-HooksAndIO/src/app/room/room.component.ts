import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RoomList } from './room';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
})
export class RoomComponent implements OnInit {

  roomList : RoomList[] = []
  selectedRoom : RoomList;

  constructor() { }

  // Lifecycle Hook which will be called after invoking of the constructor
  ngOnInit() {
    this.roomList = [{
      no : 1,
      type : "Delux Suite",
      price : 4500,
      ammenities : ["TV","Gas","AC","Geyser"],
      status : "Not Available"
    },
    {
      no : 2,
      type : "Premium Suite",
      price : 8500,
      ammenities : ["TV","Gas","AC","Geyser"],
      status : "Not Available"
  
    },
    {
      no : 3,
      type : "Normal Suite",
      price : 3000,
      ammenities : ["TV","Gas","AC","Geyser"],
      status : "Not Available"
  
    },
    {
      no : 4,
      type : "Delux Suite",
      price : 4500,
      ammenities : ["TV","Gas","AC","Geyser"],
      status : "Not Available"
    }]
  }

  handleBooking(){
    this.roomList[0].status="Available"
  }


  selectedRoomFromChild(room:RoomList)
  {
    this.selectedRoom = room;
  }

}
