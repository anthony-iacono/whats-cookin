import './styles.css';
import apiCalls from './apiCalls';
import RecipeRepository from './classes/RecipeRepository';
import recipeData from './data/recipes';

const allRecipes = document.querySelector('.js-all-recipes');
const container = document.querySelector('.js-container');
const recipePopout = document.querySelector('.js-recipe-popout');
const recipeRepository = new RecipeRepository(recipeData);

window.onload = displayAllRecipes();
allRecipes.addEventListener('click', displayRecipe)

function displayRecipe(event) {
  hide(allRecipes);
  show(recipePopout);
  const clickedRecipeId = parseInt(event.target.parentNode.id)
  const selectedRecipe = recipeRepository.recipes.find(recipe => recipe.id === clickedRecipeId)
  fillPopout(selectedRecipe);
  displayPopoutIngredients(selectedRecipe);
  displayPopoutInstructions(selectedRecipe);
};

function fillPopout(selectedRecipe) {
  recipePopout.innerHTML = `
    <article>
      <h2>${selectedRecipe.name}</h2>
      <img src="${selectedRecipe.image}">
      <h3>Ingredients</h3>
      <ul class="js-popout-ingredients"></ul>
      <h3>Directions</h3>
      <ol class="js-popout-instructions"></ol>
      <h3>Cost</h3>
      <p class="js-cost">${selectedRecipe.cost}</p>
    </article>
  `
}

function displayPopoutIngredients(selectedRecipe) {
  selectedRecipe.ingredients.forEach(ingredient => {
    document.querySelector('.js-popout-ingredients').innerHTML += `<li>${ingredient.amount} ${ingredient.unit} ${ingredient.name}</li>`;
  });
}

function displayPopoutInstructions(selectedRecipe) {
  selectedRecipe.instructions.forEach(instruction => {
    document.querySelector('.js-popout-instructions').innerHTML += `<li>${instruction.instruction}</li>`;
  });
}

function displayAllRecipes() {
  recipeRepository.recipes.forEach(recipe => {
    const recipeCard = `<article class="recipe-card" id="${recipe.id}">
    <h2>${recipe.name}</h2>
    <img src="${recipe.image}">
    </article>`;
    allRecipes.innerHTML += recipeCard;
  });
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}
