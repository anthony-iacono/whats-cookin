import './styles.css';
import apiCalls from './apiCalls';
import RecipeRepository from './classes/RecipeRepository';
import recipeData from './data/recipes';

const allRecipes = document.querySelector('.js-all-recipes');
const recipeRepository = new RecipeRepository(recipeData);
const container = document.querySelector('.js-container');
const recipePopout = document.querySelector('.js-recipe-popout');

allRecipes.addEventListener('click', displayRecipe)

function displayRecipe(event) {
  console.log(event.target, "target")
  const clickedRecipeId = parseInt(event.target.parentNode.id)
  console.log(typeof clickedRecipeId)
  const selectedRecipe = recipeRepository.recipes.find(recipe => recipe.id === clickedRecipeId)
  hide(allRecipes);
  show(recipePopout);
  recipePopout.innerHTML = `
  <article>
  <h2>${selectedRecipe.name}</h2>
  <img src="${selectedRecipe.image}">
  <p>${selectedRecipe.instructions}</p>
  <p>${selectedRecipe.ingredients}</p>
  </article>
  `
};

recipeRepository.recipes.forEach(recipe => {
  const recipeCard = `<article class="recipe-card" id="${recipe.id}">
  <h2>${recipe.name}</h2>
  <img src="${recipe.image}">
  </article>`
  allRecipes.innerHTML += recipeCard
});

function show(element) {
  element.classList.remove('hidden')
};

function hide(element) {
  element.classList.add('hidden')
};
/*
The goal is to view a list of all allRecipes
HOW
we want to grab the recipes from the source -- import data file
and we want to display them in some sort of order
*/


console.log(recipeRepository);
