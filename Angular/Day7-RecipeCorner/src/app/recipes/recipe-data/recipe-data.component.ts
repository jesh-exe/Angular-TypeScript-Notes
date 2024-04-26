import { Component, OnInit } from '@angular/core';
import { MatChipsModule } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../Recipe.interface';
import { RecipesService } from '../services/Recipes.service';

@Component({
  selector: 'app-recipe-data',
  templateUrl: './recipe-data.component.html',
  styleUrls: ['./recipe-data.component.css'],

})
export class RecipeDataComponent implements OnInit {

  recipeData : Recipe;

  // Activated Routes are important for accessing the data of the Routes which is send by the programmer
  // It is also referred as Dynamic Routing
  constructor(private route: ActivatedRoute,private recipeService : RecipesService) { }

  ngOnInit() {
    var recipeId :number;
    this.route.params.subscribe((params) => {recipeId = params.recipeNumber} );
    this.recipeService.getRecipeById(recipeId).subscribe((recipe) => this.recipeData = recipe);
  }

}
