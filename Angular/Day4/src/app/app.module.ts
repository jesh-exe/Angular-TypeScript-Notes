import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './app-config/app.config';

@NgModule({
  declarations: [	
    AppComponent,
      RoomsComponent,
      RoomListComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [
    // This is the Value Provider example that APP SERVICE CONFIG will be providing the value of APP CONFIG
    {
      provide : APP_SERVICE_CONFIG,
      useValue : APP_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
