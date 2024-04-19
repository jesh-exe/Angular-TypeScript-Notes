import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { RoomListComponent } from './room/room-list/room-list.component';
import { CommonModule, JsonPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    RoomListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  providers: [JsonPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
