import { Component, OnInit } from '@angular/core';
import { RoomList } from './rooms';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  whatButton = "";

  roomAvailable: boolean = true;
  rooms : RoomList[] = [{
    roomNo : 1,
    roomType : "Delux Suite",
    price : 4500,
    ammenities : ["TV","Gas","AC","Geyser"],
    status : "Not Available"
  },
  {
    roomNo : 2,
    roomType : "Premium Suite",
    price : 8500,
    ammenities : ["TV","Gas","AC","Geyser"],
    status : "Not Available"

  },
  {
    roomNo : 1,
    roomType : "Normal Suite",
    price : 3000,
    ammenities : ["TV","Gas","AC","Geyser"],
    status : "Not Available"

  },
  {
    roomNo : 1,
    roomType : "Delux Suite",
    price : 4500,
    ammenities : ["TV","Gas","AC","Geyser"],
    status : "Not Available"

  }]

  constructor() { }

  ngOnInit() {
  }

  toggleRoomAvailabe() {
    this.roomAvailable = !this.roomAvailable;
  }

  handleStatusChange(index)
  {
    if(this.rooms[index].status == "Not Available")
      this.rooms[index].status = "Available";
    else
    this.rooms[index].status = "Not Available";
  }

}
