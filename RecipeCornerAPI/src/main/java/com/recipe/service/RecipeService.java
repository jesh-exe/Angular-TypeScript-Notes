package com.recipe.service;

import java.util.List;

import com.recipe.dto.RecipeRequestDto;
import com.recipe.entity.Recipe;

public interface RecipeService {

	String addRecipes(List<RecipeRequestDto> recipes);
	String addRecipe(RecipeRequestDto recipeDto);
	Recipe getRecipe(Integer id);
	List<Recipe> getAllRecipes();
	
}
