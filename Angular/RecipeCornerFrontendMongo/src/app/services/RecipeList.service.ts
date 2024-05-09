import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from '../app.config';
import { Recipe } from '../recipes/Recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {

  recipeList: Recipe[]
  myRecipeList : Recipe[]

  constructor(private http : HttpClient,@Inject(APP_SERVICE_CONFIG)private config : any) { }

  getRecipeList(){
    this.http.get(this.config.apiEndpoint + "/recipes").subscribe(
      (result : Recipe[]) => {
        this.recipeList = result;
      }
    )
  }

}
