import { Recipe } from "../recipes/Recipe.interface";

export interface LoggedUserDetails{
    email : string,
    id : number,
    name : string,
    myRecipes : Recipe[]
}