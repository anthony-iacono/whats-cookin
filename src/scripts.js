import './styles.css';
import apiCalls from './apiCalls';
import RecipeRepository from './classes/RecipeRepository';
import recipeData from './data/recipes';

const allRecipes = document.querySelector('.js-home-section');
const container = document.querySelector('.js-home-section');
const favoritesBtn = document.querySelector('.js-favorites-btn');
const homeSection = document.querySelector('.js-home-section');
const homeBtn = document.querySelector('.js-home-btn');
const recipePopout = document.querySelector('.js-recipe-popout');
const recipeRepository = new RecipeRepository(recipeData);
const searchBox = document.querySelector('.js-search-box');
const favoritesSection = document.querySelector('.js-favorites-section');
const resultsSection = document.querySelector('.js-results-section');
const searchSection = document.querySelector('.js-search-section');
const tagsSection = document.querySelector('.js-tags-section');
const allRecipesRow = document.getElementById('row1');

window.onload = displayRecipes(recipeRepository.recipes, allRecipesRow);
allRecipes.addEventListener('click', displayPopout);
favoritesBtn.addEventListener('click', showFavoritesSection);
homeBtn.addEventListener('click', showHomeSection);
resultsSection.addEventListener('click', displayPopout);
searchBox.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    displayResults(searchBox.value.toLowerCase());
  }
})
tagsSection.addEventListener('click', updateSelectedTags);

function updateSelectedTags(e) {
  if (!e.target.matches('[type="checkbox"]')) {
    return;
  } else if (e.target.checked) {
    recipeRepository.selectedTags.push(event.target.name)
    const filteredRecipes = recipeRepository.filterByTag();
    displayRecipes(filteredRecipes, resultsSection);
  } else {
    recipeRepository.selectedTags = recipeRepository.selectedTags.filter(tag => {
      return tag !== event.target.name;
    })
    if(recipeRepository.selectedTags.length) {
      const filteredRecipes = recipeRepository.filterByTag();
      displayRecipes(filteredRecipes, resultsSection);
    } else {
      const translatedRecipes = recipeRepository.translateIdsToRecipes(recipeRepository.matchingRecipeIds);
      displayRecipes(translatedRecipes, resultsSection);
    }
  }
  // const translatedRecipes = recipeRepository.translateIdsToRecipes(recipeRepository.matchingRecipeIds);
  // displayRecipes(translatedRecipes, resultsSection);
}

function displayResults(keywords) {
  hide(recipePopout, homeSection, favoritesSection);
  show(searchSection);
  recipeRepository.search(keywords);
  const translatedRecipes = recipeRepository.translateIdsToRecipes(recipeRepository.matchingRecipeIds);
  filterTags();
  displayTags();
  displayRecipes(translatedRecipes, resultsSection);
}



function filterTags() {
  recipeRepository.matchingTags = [];
  const translatedIds = recipeRepository.translateIdsToRecipes(recipeRepository.matchingRecipeIds)
  translatedIds.forEach(recipe => {
    recipe.tags.filter(tag => {
      if (!recipeRepository.matchingTags.includes(tag)) {
        recipeRepository.matchingTags.push(tag);
      }
    })
  })
}

function displayTags() {
  recipeRepository.matchingTags.forEach(tag => {
    const tagCard = `
      <label>
        <input class="tag" type="checkbox" name="${tag}">${tag}
      </label>
    `;
    tagsSection.innerHTML += tagCard;
  })
}

function showFavoritesSection() {
  hide(recipePopout, homeSection);
  show(favorites);
}

function showHomeSection() {
  hide(recipePopout, resultsSection, favoritesSection, tagsSection);
  show(homeSection);
}

function displayPopout(event) {
  hide(allRecipes, resultsSection);
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

function show(...views) {
  views.forEach(view => view.classList.remove('hidden'));
}


// Ideas
// Meals to cook include function with Date.now that tracks how long the recipe has been stored, and removes it automatically if not cooked
