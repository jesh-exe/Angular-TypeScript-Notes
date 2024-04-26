package com.recipe.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "recipe")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Recipe {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	@Lob
	private String ingredients;
	@Lob
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
