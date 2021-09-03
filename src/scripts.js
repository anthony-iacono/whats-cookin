import './styles.css';
import apiCalls from './apiCalls';
import recipeData from './data/recipes';
import RecipeRepository from './classes/RecipeRepository';

const favoritesBtn = document.querySelector('.js-favorites-btn');
const favoritesSection = document.querySelector('.js-favorites-section');
const homeSection = document.querySelector('.js-home-section');
const homeBtn = document.querySelector('.js-home-btn');
const popout = document.querySelector('.js-recipe-popout');
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
  show(popout);
  const selectedRecipe = recipeRepo.recipes.find(recipe => {
    return event.target.classList.contains(recipe.id)
  });

  fillPopout(selectedRecipe);
  fillIngredients(selectedRecipe);
  fillInstructions(selectedRecipe);
}

function fillIngredients(selectedRecipe) {
  selectedRecipe.ingredients.forEach(ingredient => {
    document.querySelector('.js-ingredients').innerHTML +=
    `<li>${ingredient.amount} ${ingredient.unit} ${ingredient.name}</li>`;
  });
}

function fillInstructions(selectedRecipe) {
  selectedRecipe.instructions.forEach(instruction => {
    document.querySelector('.js-instructions').innerHTML +=
    `<li>${instruction.instruction}</li>`;
  });
}

function displayRecipes(recipes, section) {
  section.innerHTML = '';
  recipes.forEach(recipe => {
    const recipeCard =
    `<article class="recipe ${recipe.id}">
      <img class="recipe-image ${recipe.id}" src="${recipe.image}">
      <div class="article-title ${recipe.id}">
        <h2 class="card-title ${recipe.id}">${recipe.name}</h2>
      </div>
    </article>`;
    section.innerHTML += recipeCard;
  });
}

function displayResults(keywords) {
  hide(popout, homeSection, favoritesSection);
  show(searchSection);
  recipeRepo.search(keywords);
  filterTags();
  displayTags();
  const convertedRecipes = recipeRepo.convertToRecipes()
  displayRecipes(convertedRecipes, resultsSection);
}

function displayTags() {
  recipeRepo.matchingTags.forEach(tag => {
    const tagCard =
    `<label>
        <input class="tag" type="checkbox" name="${tag}">${tag}
    </label>`;
    tagsSection.innerHTML += tagCard;
  })
}

function fillPopout(selectedRecipe) {
  popout.innerHTML =
    `<article>
      <h2>${selectedRecipe.name}</h2>
      <img src="${selectedRecipe.image}">
      <h3>Ingredients</h3>
      <ul class="js-ingredients"></ul>
      <h3>Directions</h3>
      <ol class="js-instructions"></ol>
      <h3>Cost</h3>
      <p class="js-cost">${selectedRecipe.cost}</p>
    </article>`;
}

function filterTags() {
  recipeRepo.matchingTags = [];
  const convertedRecipes = recipeRepo.convertToRecipes(recipeRepo.matchingIds);
  convertedRecipes.forEach(recipe => {
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
  hide(popout, homeSection);
  show(favoritesSection);
}

function showHome() {
  hide(popout, resultsSection, favoritesSection, tagsSection);
  show(homeSection);
}

function showResults(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    displayResults(searchBox.value.toLowerCase());
  }
}
//****** REFACTOR BELOW*******

function updateSelectedTags(event) {
  const checkbox = event.target;
  const tag = checkbox.name;
  if (!checkbox.matches('[type="checkbox"]')) {
    return;
  } else if (checkbox.checked) {
    recipeRepo.selectedTags.push(tag)
    const filteredRecipes = recipeRepo.filterByTag();
    displayRecipes(filteredRecipes, resultsSection);
  } else {
    recipeRepo.selectedTags = recipeRepo.selectedTags.filter(tag => {
      return tag !== tag;
    })
    if (recipeRepo.selectedTags.length) {
      const filteredRecipes = recipeRepo.filterByTag();
      displayRecipes(filteredRecipes, resultsSection);
    } else {
      const convertedRecipes = recipeRepo.convertToRecipes()
      displayRecipes(convertedRecipes, resultsSection);
    }
  }
}
