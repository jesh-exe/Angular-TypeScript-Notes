import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './databinding/first.component';
import { EventsComponent } from './events/events.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [					
    AppComponent,
      FirstComponent,
      EventsComponent,
      CounterComponent,
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
