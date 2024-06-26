import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './app.config';
import { HeaderComponent } from './header/header.component';
import { RecipeCardComponent } from './recipes/recipe-card/recipe-card.component';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { InitService } from './init.service';

function initFactory(initService:InitService)
{
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeCardComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{
    provide: APP_SERVICE_CONFIG,
    useValue: APP_CONFIG
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  },
  {
    provide : APP_INITIALIZER,
    useFactory : initFactory,
    deps : [InitService],
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
