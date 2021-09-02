import './styles.css';
import apiCalls from './apiCalls';
import RecipeRepository from './classes/RecipeRepository';
import recipeData from './data/recipes';

const allRecipes = document.querySelector('.js-home');
const container = document.querySelector('.js-home');
const favoritesBtn = document.querySelector('.js-favorites-btn');
const home = document.querySelector('.js-home');
const homeBtn = document.querySelector('.js-home-btn');
const recipePopout = document.querySelector('.js-recipe-popout');
const recipeRepository = new RecipeRepository(recipeData);
const searchBox = document.querySelector('.js-search-box');
const favorites = document.querySelector('.js-favorites');
const searchResults = document.querySelector('.js-results');
const allRecipesRow = document.getElementById('row1');

window.onload = displayRecipes(recipeRepository.recipes, allRecipesRow);
homeBtn.addEventListener('click', returnHome)
favoritesBtn.addEventListener('click', showFavorites)
allRecipes.addEventListener('click', displayRecipe)
searchResults.addEventListener('click', displayRecipe)
searchBox.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    showResults(searchBox.value.toLowerCase());
  }
})

function showResults(searchTerms) {
  hide(recipePopout, home, favorites);
  show(searchResults);
  recipeRepository.filterByKeyword(searchTerms);
  const translatedRecipes = recipeRepository.translateIdsToRecipes(recipeRepository.matchingRecipes);
  displayRecipes(translatedRecipes, searchResults);
}

function showFavorites() {
  hide(recipePopout, home);
  show(favorites);
}

function returnHome() {
  hide(recipePopout, searchResults, favorites);
  show(home);
}

function displayRecipe(event) {
  hide(allRecipes, searchResults);
  show(recipePopout);
  const selectedRecipe = recipeRepository.recipes.find(recipe => event.target.classList.contains(recipe.id));
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

function displayRecipes(recipes, section) {
  section.innerHTML = '';
  recipes.forEach(recipe => {
    const recipeCard = `
    <article class="recipe ${recipe.id}">
      <img class="recipe-image ${recipe.id}" src="${recipe.image}">
      <div class="article-title ${recipe.id}">
        <h2 class="card-title ${recipe.id}">${recipe.name}</h2>
      </div>
    </article>
    `;
    section.innerHTML += recipeCard;
  });
}

function hide(...views) {
  views.forEach(view => view.classList.add('hidden'));
}

function show(element) {
  element.classList.remove('hidden');
}


// Ideas
// Meals to cook include function with Date.now that tracks how long the recipe has been stored, and removes it automatically if not cooked
