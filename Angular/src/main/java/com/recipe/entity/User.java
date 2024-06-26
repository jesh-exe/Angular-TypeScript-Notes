package com.recipe.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "user")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String email;
	private String password;
	@OneToMany(mappedBy = "myUser", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
	private List<Recipe> myRecipes = new ArrayList<>();
	
	public void setRecipe(Recipe recipe)
	{
		recipe.setMyUser(this);
		myRecipes.add(recipe);
	}
	
	public void deleteRecipe(Recipe recipe)
	{
		recipe.setMyUser(null);
		myRecipes.remove(recipe);
	}
}
