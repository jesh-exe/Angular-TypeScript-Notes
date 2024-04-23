import { Injectable } from '@angular/core';
import { Room } from '../room';

// This enable the DI and the provided in helps in managing the providers list in the runtime by the Angular
// Before Angular 6 we had to add the name of services in app.module.ts in providers section, but no more because of this
@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList : Room[]

  constructor() { 
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

  getRoomsList(){
    return this.roomList;
  }

  addRoom(room : Room)
  {
    this.roomList = [...this.roomList,room];
  }

}
