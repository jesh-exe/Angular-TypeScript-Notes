import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG,APP_CONFIG } from 'src/app/app.config';
import { Recipe } from '../Recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

constructor(private http : HttpClient, @Inject(APP_SERVICE_CONFIG) private config : any) { }

getRecipes()
{
  return this.http.get<Recipe[]>("https://dummyjson.com/recipes?limit=50");
}

}