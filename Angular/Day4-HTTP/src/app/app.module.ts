import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './app.config';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [		
    AppComponent,
      RecipesComponent,
      HeaderComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{
    provide : APP_SERVICE_CONFIG,
    useValue : APP_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
