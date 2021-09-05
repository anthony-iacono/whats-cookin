import './styles.css';
import apiCalls from './apiCalls';
import recipeData from './data/recipes';
import RecipeRepository from './classes/RecipeRepository';

const favoritesBtn = document.querySelector('.js-favorites-btn');
const favoritesSearchBox = document.querySelector('.js-favorites-search-box');
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
favoritesSearchBox.addEventListener('keypress', function() {
  showResults(event, favoritesSection);
})
homeBtn.addEventListener('click', showHome);
homeSection.addEventListener('click', displayPopout);
resultsSection.addEventListener('click', displayPopout);
searchBox.addEventListener('keypress', function() {
  showResults(event, searchSection)
});
tagsSection.addEventListener('click', filterResultsByTag);

function displayPopout(event) {
  hide(homeSection, searchSection);
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

function displayResults(keywords, section) {
  hide(popout, homeSection, favoritesSection, searchSection);
  show(section);
  recipeRepo.search(keywords);
  filterTags();
  displayTags(section);
  const convertedRecipes = recipeRepo.convertToRecipes()
  displayRecipes(convertedRecipes, resultsSection);
}

function displayTags() {
  tagsSection.innerHTML = ''
  recipeRepo.matchingTags.forEach(tag => {
    const tagCard =
    `<label class="tags">
        <input class="tag" type="checkbox" name="${tag}">${tag}
    </label>`;
    tagsSection.innerHTML += tagCard;
  })
}

function fillPopout(selectedRecipe) {
  popout.innerHTML =
    `<article class="full-recipe">
      <img src="${selectedRecipe.image}">
      <h2>${selectedRecipe.name}</h2>
      <div class="test">
        <h3>Ingredients</h3>
        <ul class="js-ingredients"></ul>
      </div>
      <div class="test-two">
        <h3>Directions</h3>
        <ol class="js-instructions"></ol>
      </div>
      <div class="test-three">
        <h3>Cost</h3>
        <p class="js-cost">${selectedRecipe.cost}</p>
      </div>
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
  location.reload()
}

function showResults(event, section) {
  if (event.key === 'Enter') {
    event.preventDefault();
    displayResults(searchBox.value.toLowerCase(), section);
  }
}

function filterResultsByTag(event) {
  const checkbox = event.target;
  const tag = checkbox.name;
  if (!checkbox.matches('[type="checkbox"]')) {
    return;
  } else if (checkbox.checked) {
    addTag(tag);
  } else {
    remove(tag)
  }
}

function addTag(tag) {
  recipeRepo.selectedTags.push(tag);
  const filteredRecipes = recipeRepo.filterByTag();
  displayRecipes(filteredRecipes, resultsSection);
}

function removeTag(tag) {
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
