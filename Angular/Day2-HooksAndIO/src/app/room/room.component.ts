import { JsonPipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RoomList } from './room';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
})
export class RoomComponent implements OnInit , AfterViewInit{

  roomList : RoomList[] = []
  selectedRoom : RoomList;

  // This will give the instance of Header Component in the Rooms Component.
  @ViewChild(HeaderComponent) headerComponent : HeaderComponent;

  constructor() { }
  
  // Lifecycle Hook which will be called after invoking of the constructor
  ngOnInit() {
    console.log(this.headerComponent)
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
  
  ngAfterViewInit(): void {
    console.log(this.headerComponent)
  }


  handleBooking(){
    this.roomList[0].status="Available"
  }
  
  
  selectedRoomFromChild(room:RoomList)
  {
    this.selectedRoom = room;
  }
  
  addRoom() : void {
    
    var newRoom : RoomList = {
      no : 5,
      type : "Double Sharing",
      price : 2000,
      ammenities : ["TV","Gas","AC","Geyser"],
      status : "Not Available"
    }
    // This wont be reflected in the child component if the ChangeDetectionStrategy is set to OnPush as the state is modified
    // this.roomList.push(newRoom);
    this.roomList = [...this.roomList,newRoom];
  }

}
