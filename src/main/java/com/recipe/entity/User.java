package com.recipe.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

//@Entity
//@Table(name = "user")
//public class User {
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Integer id;
//	private String name;
//	private String email;
//	private String password;
//	@OneToMany(mappedBy = "myUser", cascade = CascadeType.ALL, orphanRemoval = true)
//	private List<Recipe> myRecipes = new ArrayList<>();
//	
//	public void setRecipe(Recipe recipe)
//	{
//		recipe.setMyUser(this);
//		myRecipes.add(recipe);
//	}
//}
