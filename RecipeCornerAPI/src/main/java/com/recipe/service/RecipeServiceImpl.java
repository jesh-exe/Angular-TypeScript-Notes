package com.recipe.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.recipe.dto.RecipeRequestDto;
import com.recipe.entity.Recipe;
import com.recipe.repository.RecipeRepository;

@Service
@Transactional
public class RecipeServiceImpl implements RecipeService{

	@Autowired
	private RecipeRepository recipeRepository;
	@Autowired
	private ModelMapper mapper;

	@Override
	public String addRecipes(List<RecipeRequestDto> recipes) {
		List<Recipe> recipeList = new ArrayList<Recipe>();
		for(RecipeRequestDto recipe : recipes)
		{
			Recipe recipeObject = mapper.map(recipe, Recipe.class);
			recipeList.add(recipeObject);
		}
		recipeRepository.saveAll(recipeList);
		return "Data Saved";
	}

	@Override
	public String addRecipe(RecipeRequestDto recipeDto) {
		Recipe objRecipe = mapper.map(recipeDto, Recipe.class);
		recipeRepository.save(objRecipe);
		return "Data Saved";
	}

	@Override
	public Recipe getRecipe(Integer id) {
		return recipeRepository.findById(id).orElseThrow( () -> new RuntimeException("Not Found!") );
	}

	@Override
	public List<Recipe> getAllRecipes() {
		return recipeRepository.findAll();
	}
	
	
}
