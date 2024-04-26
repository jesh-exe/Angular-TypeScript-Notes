import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe.interface';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  recipeFormData: Recipe = {
    id: 0,
    name: "",
    ingredients: [],
    instructions: [],
    prepTimeMinutes: 0,
    cookTimeMinutes: 0,
    servings: 0,
    difficulty: "",
    cuisine: "",
    caloriesPerServing: 0,
    tags: [],
    image: "",
    rating: 0,
  }

  constructor() { }

  ngOnInit() {
  }

  public handleAddData(){
    console.log(this.recipeFormData)
  }

}
