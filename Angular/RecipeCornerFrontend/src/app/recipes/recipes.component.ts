import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeListService } from '../services/RecipeList.service';
import { Recipe } from './Recipe.interface';
import { RecipesService } from './services/Recipes.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit, OnDestroy {

  listLoaded: boolean = false;
  subscription: Subscription

  constructor(private recipeService: RecipesService,public recipeListService : RecipeListService) {

  }

  ngOnInit() {
    this.recipeService.recipes$.subscribe((data: any) => {
      this.recipeListService.recipeList = data;
      this.listLoaded = true
    })
  }

  loadRecipes() {
    console.log("Loading Recipes....")
    this.recipeService.recipes$.subscribe((data: any) => {
      this.recipeListService.recipeList = data;
      this.listLoaded = true
    })
  }

  addRecipe() {
    var recipe: Recipe = {
      id: 1,
      name: "Chicken Tikka Masala",
      ingredients: ["Chicken", "Onion", "Tomato"],
      instructions: ["Cook Onions", "Cook Chicken Easy"],
      prepTimeMinutes: 20,
      cookTimeMinutes: 20,
      servings: 4,
      difficulty: "Easy",
      cuisine: "Indian",
      caloriesPerServing: 400,
      tags: ["Meal", "Lunch"],
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      rating: 4.9,
    }

  }


  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

}