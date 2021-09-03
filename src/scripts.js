import './styles.css';
import apiCalls from './apiCalls';
import recipeData from './data/recipes';
import RecipeRepository from './classes/RecipeRepository';

const favoritesBtn = document.querySelector('.js-favorites-btn');
const favoritesSection = document.querySelector('.js-favorites-section');
const homeSection = document.querySelector('.js-home-section');
const homeBtn = document.querySelector('.js-home-btn');
const recipePopout = document.querySelector('.js-recipe-popout');
const recipeRepo = new RecipeRepository(recipeData);
const resultsSection = document.querySelector('.js-results-section');
const searchBox = document.querySelector('.js-search-box');
const searchSection = document.querySelector('.js-search-section');
const tagsSection = document.querySelector('.js-tags-section');

window.onload = displayRecipes(recipeRepo.recipes, homeSection);
favoritesBtn.addEventListener('click', showFavorites);
homeBtn.addEventListener('click', showHome);
homeSection.addEventListener('click', displayPopout);
resultsSection.addEventListener('click', displayPopout);
searchBox.addEventListener('keypress', showResults);
tagsSection.addEventListener('click', updateSelectedTags);

function displayPopout(event) {
  hide(homeSection, resultsSection);
  show(recipePopout);
  const selectedRecipe = recipeRepo.recipes.find(recipe => {
    event.target.classList.contains(recipe.id)
  });
  fillPopout(selectedRecipe);
  displayPopoutIngredients(selectedRecipe);
  displayPopoutInstructions(selectedRecipe);
}

function displayPopoutIngredients(selectedRecipe) {
  selectedRecipe.ingredients.forEach(ingredient => {
    document.querySelector('.js-popout-ingredients').innerHTML +=
    `<li>${ingredient.amount} ${ingredient.unit} ${ingredient.name}</li>`;
  });
}

function displayPopoutInstructions(selectedRecipe) {
  selectedRecipe.instructions.forEach(instruction => {
    document.querySelector('.js-popout-instructions')
      .innerHTML += `<li>${instruction.instruction}</li>`;
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

function displayResults(keywords) {
  hide(recipePopout, homeSection, favoritesSection);
  show(searchSection);
  recipeRepo.search(keywords);
  const translatedRecipes = recipeRepo.convertToRecipes(recipeRepo.matchingIds);
  filterTags();
  displayTags();
  displayRecipes(translatedRecipes, resultsSection);
}

function displayTags() {
  recipeRepo.matchingTags.forEach(tag => {
    const tagCard = `
      <label>
        <input class="tag" type="checkbox" name="${tag}">${tag}
      </label>
    `;
    tagsSection.innerHTML += tagCard;
  })
}

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

function filterTags() {
  recipeRepo.matchingTags = [];
  const translatedIds = recipeRepo.convertToRecipes(recipeRepo.matchingIds)
  translatedIds.forEach(recipe => {
    recipe.tags.filter(tag => {
      if (!recipeRepo.matchingTags.includes(tag)) {
        recipeRepo.matchingTags.push(tag);
      }
    })
  })
}

function hide(...views) {
  views.forEach(view => view.classList.add('hidden'));
}

function show(...views) {
  views.forEach(view => view.classList.remove('hidden'));
}

function showFavorites() {
  hide(recipePopout, homeSection);
  show(favoritesSection);
}

function showHome() {
  hide(recipePopout, resultsSection, favoritesSection, tagsSection);
  show(homeSection);
}

function showResults() {
  if (event.key === 'Enter') {
    event.preventDefault();
    displayResults(searchBox.value.toLowerCase());
  }
}

function updateSelectedTags(e) {
  if (!e.target.matches('[type="checkbox"]')) {
    return;
  } else if (e.target.checked) {
    recipeRepo.selectedTags.push(event.target.name)
    const filteredRecipes = recipeRepo.filterByTag();
    displayRecipes(filteredRecipes, resultsSection);
  } else {
    recipeRepo.selectedTags = recipeRepo.selectedTags.filter(tag => {
      return tag !== event.target.name;
    })
    if (recipeRepo.selectedTags.length) {
      const filteredRecipes = recipeRepo.filterByTag();
      displayRecipes(filteredRecipes, resultsSection);
    } else {
      const translatedRecipes =
      recipeRepo.convertToRecipes(recipeRepo.matchingIds);
      displayRecipes(translatedRecipes, resultsSection);
    }
  }
}
