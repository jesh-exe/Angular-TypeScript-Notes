import { Component, Inject, OnInit } from '@angular/core';
import { APP_SERVICE_CONFIG } from '../app-config/app.config';
import { localStorageToken } from '../localstorage.token';
import { Room } from './room';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  roomList: Room[]

  // This is Dependency Injection done automatically by Angular
  // The instance for the Room Service will be created only once in the lifetime and can be created as a prototype if wished to
  constructor(private roomService: RoomsService,
    @Inject(APP_SERVICE_CONFIG) private appConfig,
    // Injecting the Localstorage from the Provider we have created as localstorage.token.ts
    @Inject(localStorageToken) private localStorage: Storage) {

      // Accessing the Value of the Value Provider we have created in app-config folder and mentioned in the app.module.ts file
      // It can be injected from anywhere from the application and can be accessed globally if not mentioned in the providers of the component
      console.log(this.appConfig.apiEndpoint)
      
      // Using the local storage API
      // localStorage.setItem("name","Jayesh");
  }

  ngOnInit() {
    this.getRooms()
  }

  getRooms() {
    this.roomList = this.roomService.getRoomsList();
  }

  addRoom(room) {
    console.log(room)
    this.roomService.addRoom(room)
    this.getRooms()
  }

}
