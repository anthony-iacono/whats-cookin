import './styles.css';
import apiCalls from './apiCalls';
import RecipeRepository from './classes/RecipeRepository';
import recipeData from './data/recipes';

const allRecipes = document.querySelector('.js-all-recipes');
const recipeRepository = new RecipeRepository(recipeData);

recipeRepository.recipes.forEach(recipe => {
  const recipeCard = `<article class="recipe-card">
  <h2>${recipe.name}</h2>
  <img src=${recipe.image}>
  </article>`
  allRecipes.innerHTML += recipeCard
});

/*
The goal is to view a list of all allRecipes
HOW
we want to grab the recipes from the source -- import data file
and we want to display them in some sort of order
*/


console.log(recipeRepository);
