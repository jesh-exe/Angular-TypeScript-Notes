import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes/services/Recipes.service';
import { LoggedUserDetails } from '../services/LoggedUser.interface';
import { LoggedUserService } from '../services/LoggedUser.service';
import { RecipeListService } from '../services/RecipeList.service';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css']
})
export class MyRecipesComponent implements OnInit {

  user: LoggedUserDetails

  constructor(public loggedUserService: LoggedUserService, private recipeService: RecipesService,private recipeListService : RecipeListService) {
  }

  ngOnInit() {
    this.user = this.loggedUserService.loggedInUserDetails;
  }

  deleteRecipe(recipeId: number) {
    if (confirm("Sure to Delete it?"))
      this.recipeService.deleteRecipe(recipeId, this.loggedUserService.loggedInUserDetails.id).subscribe(
        (result) => {
          this.recipeListService.getRecipeList();
          this.user.myRecipes = result;
        }
      );
  }

}
