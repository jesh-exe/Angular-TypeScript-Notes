package com.recipe.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RecipeRequestDto {

	private String name;
	private String ingredients;
	private String instructions;
	private int prepTimeMinutes;
	private int cookTimeMinutes;
	private int servings;
	private String difficulty;
	private String cuisine;
	private int caloriesPerServing;
	private String tags;
	private String image;
	private double rating;
	
}