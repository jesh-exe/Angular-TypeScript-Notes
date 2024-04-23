import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { APP_SERVICE_CONFIG } from '../app.config';
import { Recipe } from './Recipe.interface';
import { RecipesService } from './services/Recipes.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {
  
  recipeList : Recipe [];
  constructor(private recipeService : RecipesService) {

  }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe((rooms:any)=>{
      this.recipeList = rooms.recipes;
    })
  }
}