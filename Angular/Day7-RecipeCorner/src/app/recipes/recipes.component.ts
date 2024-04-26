import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { APP_SERVICE_CONFIG } from '../app.config';
import { Recipe } from './Recipe.interface';
import { RecipesService } from './services/Recipes.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit ,OnDestroy{

  recipeList: Recipe[];
  listLoaded: boolean = false;
  subscription: Subscription

  
  // Creating a stream
  recipeList$ = this.recipeService.recipes$

  constructor(private recipeService: RecipesService) {

  }

  ngOnInit() {

    // We need to use subscribe method to read the stream of data as Angular uses RxJs which has Observable as a object
    // Helps in getting data continuosly.
    this.recipeService.recipes$.subscribe((rooms: any) => {
      this.recipeList = rooms.recipes;
      this.listLoaded = true
    })

    // This way we can achieve unsubscribe in ngOnDestroy
    // this.subscription = this.recipeService.getRecipes().subscribe((rooms: any) => {
    //   this.recipeList = rooms.recipes;
    //   this.listLoaded = true
    // })
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

    // We need to use subscribe method to read the stream of data as Angular uses RxJs which has Observable as a object
    // Helps in getting data continuosly.
    this.recipeService.addRecipe(recipe).subscribe(recipes => {
      this.recipeList = recipes;
    })

  }

  ngOnDestroy() {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

}