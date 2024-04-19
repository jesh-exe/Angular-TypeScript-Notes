import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [	
    AppComponent,
      DateComponent
   ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
